import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";

const tabs: { label: string; path: string }[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
];

export function Header() {
  const location = useLocation();
  const currentTab = tabs.some((tab) => tab.path === location.pathname)
    ? location.pathname
    : false;

  return (
    <Stack direction="row" justifyContent="end">
      <Tabs
        value={currentTab}
        centered
        aria-label="header"
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
        }}
        sx={{
          "& .MuiTabs-indicator": {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
          },
          "& .MuiTabs-indicatorSpan": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "black",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            label={tab.label}
            value={tab.path}
            component={Link}
            to={tab.path}
            sx={{
              textTransform: "none",
              fontSize: "20px",
              fontWeight: "normal",
              color: "black",
              "&.Mui-selected": {
                color: "black",
              },
            }}
          />
        ))}
      </Tabs>
    </Stack>
  );
}
