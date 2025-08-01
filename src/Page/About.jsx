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
          Sinh viên năm 3 ngành Kỹ thuật phần mềm tại FPT University (2022–2026). 
          Yêu thích lập trình Back-End, đam mê công nghệ và luôn chủ động học hỏi để phát triển bản thân.
          <br />
          <span style={{ color: "#68a063", fontWeight: 600 }}>
            Kỹ năng: Node.js, Express.js, RESTful API, SQL, Git, Teamwork, Problem Solving.
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            mb: 3,
            fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
            fontStyle: "italic",
          }}
        >
          "Tôi luôn hướng tới việc xây dựng các hệ thống hiệu quả và mang lại giá trị thực cho cộng đồng qua công nghệ."
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
      </Paper>
    </Box>
  );
};

export default About;
