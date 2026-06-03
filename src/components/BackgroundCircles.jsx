
"use client";

const circles = [
  { width: 160, height: 160, top: "8rem",   left: "2.5rem",   duration: "12s", direction: "normal",  dashes: "8,12" },
  { width: 128, height: 128, top: "5rem",   right: "5rem",    duration: "16s", direction: "reverse", dashes: "4,8"  },
  { width: 192, height: 192, bottom: "6rem",left: "25%",      duration: "20s", direction: "normal",  dashes: "6,10" },
  { width: 112, height: 112, bottom: "5rem",right: "2.5rem",  duration: "14s", direction: "reverse", dashes: "3,7"  },
];

const BackgroundCircles = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {circles.map((circle, index) => (
        <svg
          key={index}
          width={circle.width}
          height={circle.height}
          viewBox={`0 0 ${circle.width} ${circle.height}`}
          style={{
            position: "absolute",
            top: circle.top,
            bottom: circle.bottom,
            left: circle.left,
            right: circle.right,
            animation: `spinCircle ${circle.duration} linear infinite`,
            animationDirection: circle.direction,
          }}
        >
          <circle
            cx={circle.width / 2}
            cy={circle.height / 2}
            r={circle.width / 2 - 2}
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeDasharray={circle.dashes}
          />
        </svg>
      ))}

      <style>{`
        @keyframes spinCircle {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundCircles;
