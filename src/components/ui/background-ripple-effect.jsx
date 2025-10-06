"use client";
import React, { useMemo, useRef, useState, useEffect } from "react"; // 1. Import useEffect
import { cn } from "@/lib/utils";

// 2. Define a constant for the cell size
const DEFAULT_CELL_SIZE = 56;

export const BackgroundRippleEffect = ({
  rows: initialRows = 8, // Rename to initialRows
  cols: initialCols = 27, // Rename to initialCols
  cellSize = DEFAULT_CELL_SIZE,
}) => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef(null);

  // 3. State for dynamic rows and columns
  const [dynamicRows, setDynamicRows] = useState(initialRows);
  const [dynamicCols, setDynamicCols] = useState(initialCols);

  // 4. Effect to calculate dimensions on mount and resize
  useEffect(() => {
    const calculateGridSize = () => {
      if (ref.current) {
        // Get the actual height and width of the container
        const { clientHeight, clientWidth } = ref.current;

        // Calculate the number of rows/cols needed to cover the area
        // Add a buffer (+1) to ensure the grid always overshoots the container edges slightly.
        const newRows = Math.ceil(clientHeight / cellSize);
        const newCols = Math.ceil(clientWidth / cellSize);

        // Update state with new dimensions
        setDynamicRows(newRows);
        setDynamicCols(newCols);
      }
    };

    calculateGridSize(); // Calculate on mount
    window.addEventListener("resize", calculateGridSize); // Recalculate on resize

    // Cleanup the event listener
    return () => window.removeEventListener("resize", calculateGridSize);
  }, [cellSize]); // Recalculate if cellSize changes

  return (
    <div
      ref={ref}
      // Note: The 'h-full w-full' here is key, as it makes this div match
      // the height of its parent (which should be 'min-h-screen' and 'relative')
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]"
      )}
    >
      <div className="relative h-full w-full overflow-hidden"> 
        {/* Changed h-auto w-auto to h-full w-full */}
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-20% mask-radial-at-top opacity-600"
          // 5. Use the calculated dynamic dimensions
          rows={dynamicRows}
          cols={dynamicCols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey((k) => k + 1);
          }}
          interactive
        />
      </div>
    </div>
  );
};

// ... DivGrid component remains the same ...

const DivGrid = ({
  className,
  rows, // Now dynamic
  cols, // Now dynamic
  cellSize = DEFAULT_CELL_SIZE,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}) => {
  // The useMemo and gridStyle calculation are crucial here and must use the full dynamic values
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    // Key change: We remove fixed width/height and let CSS grid handle the fill
    // If the DivGrid parent is h-full w-full (as fixed above), the grid will auto-fill.
    // However, since we are calculating the cell count to match the container, 
    // the DivGrid output height will closely match the container height.
    width: cols * cellSize, 
    height: rows * cellSize,
    marginInline: "auto",
  };

  // ... rest of DivGrid implementation (no changes needed)
  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        // ... cell rendering logic
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const duration = 200 + distance * 80; // ms

        const style = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
              !interactive && "pointer-events-none"
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};