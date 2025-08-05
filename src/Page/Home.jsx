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
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/about")}
            sx={{ fontWeight: 600 }}
          >
            About Me
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
                  src="/minh.jpg"
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
  href="https://github.com/june4m/BloodDonationSupportSystemBE"
  target="_blank"
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
      p: 3,
    }}
  >
    <Box
  sx={{
    mt: 4,
    p: 3,
    borderRadius: 3,
    bgcolor: "#f9f9f9",
    boxShadow: 2,
    maxWidth: 500,
    mx: "auto",
    textAlign: "center",
  }}
>
  <Typography
    variant="h6"
    sx={{ fontWeight: 700, mb: 1, color: "#333" }}
  >
    Blood Donation Support System
  </Typography>
  
  <Typography
    variant="body2"
    sx={{
      color: "#555",
      mb: 2,
      textAlign: "justify",
      fontFamily: "Montserrat, Arial",
    }}
  >
    Hệ thống hỗ trợ đăng ký hiến máu, theo dõi đơn vị máu, phân loại nhóm máu, gửi cảnh báo và email. Hỗ trợ xác thực người dùng bằng JWT và phân quyền theo vai trò. 
  </Typography>

  <Typography
    variant="caption"
    sx={{ color: "#888", fontSize: 13 }}
  >
    Stack: Node.js, Express.js, TypeScript
  </Typography>

  <Box mt={2}>
    <Button
      variant="contained"
      href="https://github.com/june4m/BloodDonationSupportSystemBE"
      target="_blank"
      sx={{
        bgcolor: "#6a1b9a",
        color: "#fff",
        px: 3,
        borderRadius: 2,
        fontSize: 14,
        fontWeight: 600,
        "&:hover": {
          bgcolor: "#4a148c",
        },
      }}
    >
      Xem trên GitHub
    </Button>
  </Box>
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

      {/* SKILLS / TECH STACK */}
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
          Tech Stack
        </Typography>

        {/* GROUPS: Languages, Frameworks & Tools, Databases */}
        {[
          {
            title: "Languages",
            items: [
              { name: "C", color: "#00599C", icon: "🌊" },
              { name: "C#", color: "#178600", icon: "🧩" },
              { name: "Java", color: "#f89820", icon: "☕" },
              { name: "HTML5", color: "#e34c26", icon: "📄" },
              { name: "JavaScript", color: "#f7df1e", icon: "✨", textColor: "#000" },
              { name: "TypeScript", color: "#3178c6", icon: "🔷" },
            ],
          },
          {
            title: "Frameworks & Tools",
            items: [
              { name: ".NET", color: "#512bd4", icon: "🟣", textColor: "#fff" },
              { name: "Node.js", color: "#68a063", icon: "🟢" },
              { name: "Express.js", color: "#000000", icon: "🚂", textColor: "#fff" },
              { name: "JWT", color: "#000000", icon: "🔐", textColor: "#fff" },
              { name: "Postman", color: "#ef5b25", icon: "📬" },
            ],
          },
          {
            title: "Databases",
            items: [
              { name: "MongoDB", color: "#4db33d", icon: "🍃" },
              { name: "Microsoft SQL Server", color: "#a80000", icon: "🗄️" },
            ],
          },
        ].map((group) => (
          <Box key={group.title} sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                fontWeight: 600,
                color: "#555",
                fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                mb: 1,
              }}
            >
              {group.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {group.items.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    px: 3,
                    py: 1,
                    bgcolor: item.color,
                    color: item.textColor || "#fff",
                    borderRadius: 2,
                    fontWeight: 600,
                    fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    boxShadow: 2,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "default",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  {item.name}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>  
    </Box>
  );
};

export default Home;
