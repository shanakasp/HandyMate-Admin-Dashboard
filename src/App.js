import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Contacts from "./scenes/contacts";
import Dashboard from "./scenes/dashboard";
import Form from "./scenes/form";
import Sidebar from "./scenes/global/Sidebar";
import Invoices from "./scenes/invoices";
import Payment from "./scenes/payments/index.jsx";
import Quotation from "./scenes/quatations/index.jsx";
import ViewTask from "./scenes/task/ViewTask.jsx";
import Tasks from "./scenes/task/index.jsx";
import Team from "./scenes/userMngmnt";
import ReportedUsers from "./scenes/userMngmnt/ReportedUsers.jsx";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/userMngmnt" element={<Team />} />
              <Route
                path="/userMngmnt/reported-users"
                element={<ReportedUsers />}
              />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/quotations" element={<Quotation />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/tasks/viewTasks/:id" element={<ViewTask />} />
              <Route path="/payments" element={<Payment />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
