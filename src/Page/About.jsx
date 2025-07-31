import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background:
            "radial-gradient(circle at 70% 30%, #a259ff 0%, #f5f5fa 70%)",
          opacity: 0.18,
        }}
      />
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          maxWidth: 500,
          zIndex: 1,
          bgcolor: "#fff",
          textAlign: "center",
          boxShadow: 8,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#a259ff",
            letterSpacing: 2,
            mb: 1,
            fontSize: 16,
            fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
          }}
        >
          ABOUT ME
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
            color: "#222",
            mb: 2,
            lineHeight: 1.1,
          }}
        >
          Xin chào! Tôi là Minh
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#444",
            mb: 2,
            fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
          }}
        >
          Sinh viên FPT University (2022-2026), đam mê công nghệ, thích sáng tạo
          và luôn chủ động học hỏi.
          <br />
          <span style={{ color: "#68a063", fontWeight: 600 }}>
            Kỹ năng nổi bật: Web Development, Git, Node.js, SQL, Teamwork,
            Problem Solving.
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            mb: 3,
            fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
          }}
        >
          "Luôn hướng tới sự hoàn thiện bản thân và tạo ra giá trị thực cho cộng
          đồng qua công nghệ."
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
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
          Xem Portfolio
        </Button>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
          <Box
            sx={{
              px: 3,
              py: 2,
              bgcolor: "#f5f5f5",
              borderRadius: 2,
              boxShadow: 1,
              fontWeight: 600,
              color: "#a259ff",
              fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              fontSize: 18,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.08)", boxShadow: 4 },
            }}
          >
            Git
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
              bgcolor: "#f5f5f5",
              borderRadius: 2,
              boxShadow: 1,
              fontWeight: 600,
              color: "#68a063",
              fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              fontSize: 18,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.08)", boxShadow: 4 },
            }}
          >
            Node.js
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
              bgcolor: "#f5f5f5",
              borderRadius: 2,
              boxShadow: 1,
              fontWeight: 600,
              color: "#00758f",
              fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
              fontSize: 18,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.08)", boxShadow: 4 },
            }}
          >
            SQL
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
