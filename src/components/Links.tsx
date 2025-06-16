import { useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Links = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const flyZoneRef = useRef(null);
  const fly1Ref = useRef(null);
  const fly2Ref = useRef(null);

  useEffect(() => {
    const flyZone = flyZoneRef.current;
    const fly1 = fly1Ref.current;
    const fly2 = fly2Ref.current;

    // Kill previous triggers to avoid duplicates on resize
    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (isMobile) {
      // Mobile: fly straight up
      gsap.to(fly1, {
        x: 0,
        y: "-100vh",
        ease: "none",
        scrollTrigger: {
          trigger: flyZone,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(fly2, {
        x: 0,
        y: "-100vh",
        ease: "none",
        scrollTrigger: {
          trigger: flyZone,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    } else {
      // Desktop: fly to corners
      gsap.to(fly1, {
        x: "100vw",
        y: "-100vh",
        ease: "none",
        scrollTrigger: {
          trigger: flyZone,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(fly2, {
        x: "-100vw",
        y: "-100vh",
        ease: "none",
        scrollTrigger: {
          trigger: flyZone,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [isMobile]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        ref={flyZoneRef}
        sx={{
          height: "100vh",
          position: "relative",
          img: {
            transition: "0.5s",
          },
        }}
      >
        <Box
          ref={fly1Ref}
          sx={{
            position: "absolute",
            left: { xs: 100, md: 0 },
            bottom: 0,
            transition: { xs: "1s", md: "1s" },
          }}
        >
          <Box
            sx={{
              ":hover": {
                img: {
                  transform: "scale(1.2)",
                },
              },
            }}
          >
            <a href='#'>
              <img src='/telegram.png' width={80} height={80} />
            </a>
          </Box>
          <Box
            sx={{
              position: "relative",
              top: { xs: 80, md: 80 },
              left: { xs: -80, md: -140 },
              ":hover": {
                img: {
                  transform: "scale(1.2)",
                },
              },
            }}
          >
            <a href='#'>
              <img src='/twitter.png' width={80} height={80} />
            </a>
          </Box>
        </Box>
        <Box
          ref={fly2Ref}
          sx={{
            position: "absolute",
            right: { xs: 100, md: 0 },
            bottom: 0,
            transition: { xs: "0.5s", md: "1s" },
          }}
        >
          <Box
            sx={{
              ":hover": {
                img: {
                  transform: "scale(1.2)",
                },
              },
            }}
          >
            <a href='#'>
              <img src='/dexscreener.png' width={80} height={80} />
            </a>
          </Box>
          <Box
            sx={{
              position: "relative",
              top: { xs: 80, md: 80 },
              left: { xs: 80, md: 140 },
              ":hover": {
                img: {
                  transform: "scale(1.2)",
                },
              },
            }}
          >
            <a href='#'>
              <img src='/dextools.png' width={80} height={80} />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Links;
