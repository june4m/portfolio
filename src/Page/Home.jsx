import { Box, Typography, AppBar, Toolbar, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#eceae4", minHeight: "100vh" }}>
      {/* HEADER */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#222", mb: 4 }}>
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => navigate("/")}
            sx={{ fontWeight: 600 }}
          >
            Trang chủ
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/about")}
            sx={{ fontWeight: 600 }}
          >
            Giới thiệu bản thân
          </Button>
        </Toolbar>
      </AppBar>

      {/* MAIN GRID */}
      <Grid
        container
        spacing={0}
        sx={{
          maxWidth: 1100,
          mx: "auto",
          boxShadow: 3,
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        {/* LEFT SECTION */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "transparent",
            minHeight: 500,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
              p: 3,
            }}
          >
            {/* Ảnh cá nhân */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: 3,
                  border: "4px solid #a259ff",
                  bgcolor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Thay src bằng đường dẫn ảnh của bạn */}
                <img
                  src="/public/vite.svg"
                  alt="avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Typography
              variant="overline"
              sx={{
                color: "#888",
                letterSpacing: 2,
                mb: 1,
                fontSize: 16,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              }}
            >
              HEY THERE !
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                color: "#222",
                mb: 2,
                textAlign: "center",
                fontSize: { xs: 32, md: 48 },
                lineHeight: 1.1,
              }}
            >
              I AM MINH
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#555",
                mb: 3,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              FPT University Student &amp; Web Developer
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#a259ff",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: 3,
                  px: 4,
                  py: 1,
                  fontSize: 18,
                  boxShadow: 2,
                  "&:hover": { bgcolor: "#7c3aed" },
                }}
              >
                Xem dự án
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#a259ff",
                  fontWeight: 700,
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                }}
              >
                Git
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#68a063",
                  fontWeight: 700,
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                }}
              >
                Node.js
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#00758f",
                  fontWeight: 700,
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                }}
              >
                SQL
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 2,
                mb: 2,
                p: 2,
                bgcolor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: 1,
                minWidth: 220,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#222",
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Học vấn
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#444",
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                  textAlign: "center",
                }}
              >
                FPT University
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#888",
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                  textAlign: "center",
                }}
              >
                2022 - 2026
              </Typography>
            </Box>
          </Box>

          {/* background gradient */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              background:
                "radial-gradient(circle at 70% 30%, #a259ff 0%, #eceae4 70%)",
              opacity: 0.18,
            }}
          />
        </Grid>

        {/* MIDDLE SECTION */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            p: 0,
            bgcolor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                color: "#222",
                mt: 6,
                letterSpacing: 2,
              }}
            >
              BOOK
            </Typography>
            <Box
              sx={{
                mt: 4,
                width: "80%",
                height: 120,
                bgcolor: "#ddd",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#888",
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                }}
              >
                Dự án nổi bật sẽ được cập nhật tại đây
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SECTION */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            p: 0,
            bgcolor: "#222",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ p: 4 }}>
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                mb: 2,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              }}
            >
              "When words become unclear, I shall focus with{" "}
              <span style={{ color: "#bdb76b" }}>photographs</span>."
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              }}
            >
              When images become{" "}
              <span style={{ color: "#bdb76b" }}>inadequate</span>, I shall be
              content with silence.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#bdb76b",
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              }}
            >
              — Studio Nativ
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* SKILLS */}
      <Box sx={{ mt: 6, mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 2,
            fontWeight: 700,
            fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
            color: "#222",
          }}
        >
          Kỹ năng
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          {[
            { name: "Git", color: "#f1502f", icon: "🐙" },
            { name: "Node.js", color: "#68a063", icon: "🟢" },
            { name: "SQL", color: "#00758f", icon: "🗄️" },
          ].map((skill) => (
            <Box
              key={skill.name}
              sx={{
                px: 4,
                py: 2,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
                fontWeight: 600,
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                color: skill.color,
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: 5,
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <span style={{ fontSize: 28 }}>{skill.icon}</span>
              {skill.name}
            </Box>
          ))}
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ textAlign: "center", mt: 4, color: "#888", fontSize: 14 }}>
        © 2025 Portfolio | FPT University
      </Box>
    </Box>
  );
};

export default Home;
