import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ── Intro overlay ─────────────────────────────────────────────────────────────
function IntroOverlay({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0d0d0d 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background radial red glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.4 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(229,0,16,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Outer spinning ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          }}
          style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(229,0,16,0.6)",
          }}
        />

        {/* Inner spinning ring — opposite direction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          animate={{ opacity: 0.1, scale: 1, rotate: -360 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.1 },
            scale: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
          style={{
            position: "absolute",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            border: "1px solid rgba(229,0,16,0.5)",
          }}
        />

        {/* Dot grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Scan line */}
        <motion.div
          animate={{ top: ["-2%", "105%"] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.5,
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(229,0,16,0.5), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Main H&M text */}
        <div style={{ position: "relative", textAlign: "center" }}>
          {/* Glow bloom behind text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.6, 0.35], scale: [0.5, 1.2, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "200px",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(229,0,16,0.4) 0%, transparent 65%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />

          {/* H& — slides from left */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0px",
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -80, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(80px, 14vw, 160px)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background:
                  "linear-gradient(90deg, #E50010 0%, #ff4d5e 50%, #E50010 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 0 30px rgba(229,0,16,0.8)) drop-shadow(0 0 60px rgba(229,0,16,0.4))",
              }}
            >
              H&amp;
            </motion.span>

            {/* M — slides from right */}
            <motion.span
              initial={{ opacity: 0, x: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(80px, 14vw, 160px)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background:
                  "linear-gradient(90deg, #E50010 0%, #ff4d5e 50%, #E50010 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 0 30px rgba(229,0,16,0.8)) drop-shadow(0 0 60px rgba(229,0,16,0.4))",
              }}
            >
              M
            </motion.span>
          </div>

          {/* Underline — draws itself in then glows */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            style={{
              originX: 0.5,
              marginTop: "8px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px rgba(229,0,16,0.7), 0 0 20px rgba(229,0,16,0.3)",
                  "0 0 24px rgba(229,0,16,1),   0 0 48px rgba(229,0,16,0.6)",
                  "0 0 10px rgba(229,0,16,0.7), 0 0 20px rgba(229,0,16,0.3)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              style={{
                width: "200px",
                height: "2px",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, transparent, #E50010, #ff4d5e, #E50010, transparent)",
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              marginTop: "20px",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Fashion Retail Intelligence
          </motion.p>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "28px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.22,
                  ease: "easeInOut",
                }}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#E50010",
                  boxShadow: "0 0 6px rgba(229,0,16,0.7)",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Corner accents */}
        {[
          {
            top: "24px",
            left: "24px",
            borderTop: "1px solid rgba(229,0,16,0.3)",
            borderLeft: "1px solid rgba(229,0,16,0.3)",
          },
          {
            top: "24px",
            right: "24px",
            borderTop: "1px solid rgba(229,0,16,0.3)",
            borderRight: "1px solid rgba(229,0,16,0.3)",
          },
          {
            bottom: "24px",
            left: "24px",
            borderBottom: "1px solid rgba(229,0,16,0.3)",
            borderLeft: "1px solid rgba(229,0,16,0.3)",
          },
          {
            bottom: "24px",
            right: "24px",
            borderBottom: "1px solid rgba(229,0,16,0.3)",
            borderRight: "1px solid rgba(229,0,16,0.3)",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
            style={{
              position: "absolute",
              width: "32px",
              height: "32px",
              ...s,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main HeroHeader ────────────────────────────────────────────────────────────
export default function HeroHeader() {
  const [introVisible, setIntroVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [0, 1], [-20, 20]);
  const orbY = useTransform(mouseY, [0, 1], [-20, 20]);
  const orbX2 = useTransform(mouseX, [0, 1], [10, -10]);
  const orbY2 = useTransform(mouseY, [0, 1], [10, -10]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  // When intro is done, fade it out then reveal header
  const handleIntroDone = () => {
    setIntroVisible(false);
    setTimeout(() => setHeaderVisible(true), 500);
  };

  return (
    <>
      {/* Intro splash */}
      <AnimatePresence>
        {introVisible && <IntroOverlay key="intro" onDone={handleIntroDone} />}
      </AnimatePresence>

      {/* Actual header — fades in after intro exits */}
      <AnimatePresence>
        {headerVisible && (
          <motion.div
            key="header"
            ref={ref}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl mb-8"
            style={{
              background:
                "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #111111 100%)",
              boxShadow:
                "0 0 80px rgba(229,0,16,0.18), 0 25px 50px rgba(0,0,0,0.4)",
            }}
          >
            {/* Dot grid texture — slow drift */}
            <motion.div
              className="absolute inset-0 opacity-[0.06]"
              animate={{ backgroundPosition: ["0px 0px", "28px 28px"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Animated scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(229,0,16,0.4), transparent)",
              }}
              animate={{ top: ["-2%", "105%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 4,
              }}
            />

            {/* Red glow orb top-right — mouse parallax */}
            <motion.div
              className="absolute -right-20 -top-20 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,0,16,0.22) 0%, transparent 65%)",
                x: orbX,
                y: orbY,
              }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Subtle red glow bottom-left — opposite parallax */}
            <motion.div
              className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,0,16,0.10) 0%, transparent 65%)",
                x: orbX2,
                y: orbY2,
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Big faded H&M watermark — slow float */}
            <motion.div
              className="absolute -right-4 -bottom-6 text-[200px] font-black leading-none select-none pointer-events-none"
              style={{
                color: "rgba(255,255,255,0.03)",
                fontFamily: "'DM Serif Display', Georgia, serif",
                letterSpacing: "-0.03em",
              }}
              animate={{ y: [0, -10, 0], rotate: [0, 0.5, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              H&M
            </motion.div>

            {/* Decorative ring 1 — slow spin */}
            <motion.div
              className="absolute -top-12 -right-12 w-52 h-52 rounded-full border border-red-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            {/* Decorative ring 2 — opposite spin */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-red-500/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.25 }}
                >
                  <h1
                    className="text-5xl md:text-6xl font-black leading-none tracking-tight"
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      color: "#fff",
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{
                        background:
                          "linear-gradient(90deg, #E50010 0%, #ff4d5e 50%, #E50010 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter:
                          "drop-shadow(0 0 18px rgba(229,0,16,0.7)) drop-shadow(0 0 40px rgba(229,0,16,0.4))",
                        display: "inline-block",
                      }}
                    >
                      H&amp;M
                    </motion.span>{" "}
                    <motion.span
                      className="font-normal italic"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                      style={{
                        background:
                          "linear-gradient(90deg, #E50010 0%, #ff4d5e 50%, #E50010 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter:
                          "drop-shadow(0 0 18px rgba(229,0,16,0.7)) drop-shadow(0 0 40px rgba(229,0,16,0.4))",
                        display: "inline-block",
                      }}
                    >
                      Analytics
                    </motion.span>
                  </h1>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                    className="mt-2 h-[2px] w-48 rounded-full"
                    style={{ originX: 0 }}
                  >
                    <motion.div
                      className="w-full h-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #E50010 0%, rgba(229,0,16,0.2) 100%)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 8px rgba(229,0,16,0.6), 0 0 16px rgba(229,0,16,0.3)",
                          "0 0 18px rgba(229,0,16,1), 0 0 36px rgba(229,0,16,0.6)",
                          "0 0 8px rgba(229,0,16,0.6), 0 0 16px rgba(229,0,16,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-4 text-sm leading-relaxed max-w-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  Fashion Retail Intelligence — strategic insights from 3.1M+
                  transactions across store &amp; online channels.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { label: "Customers", value: "688K+", icon: "👥" },
                  { label: "Transactions", value: "3.1M+", icon: "🛍️" },
                  { label: "Period", value: "2018–2020", icon: "📅" },
                  { label: "Data Quality", value: "99.8%", icon: "✓" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.55 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                      boxShadow:
                        "0 0 24px rgba(229,0,16,0.35), 0 8px 20px rgba(0,0,0,0.3)",
                      borderColor: "rgba(229,0,16,0.4)",
                    }}
                    className="flex flex-col px-5 py-4 rounded-xl cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <motion.span
                      className="text-base mb-1"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    >
                      {stat.icon}
                    </motion.span>
                    <span
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[9px] uppercase tracking-widest mt-0.5"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
