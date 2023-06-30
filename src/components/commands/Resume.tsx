import { useContext, useEffect } from "react";
import { Wrapper } from "../styles/Output.styled";
import {
  getCurrentCmdArry,
} from "../../utils/funcs";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (rerender && currentCommand[0]==="resume") {
      const url = "https://drive.google.com/file/d/1ZCu46xPYY_BKtPKXjDEPmLaoybgG_DaQ/view?usp=sharing";
      window.open(url, "_blank");
    }
  }, []);

  return (
    <Wrapper data-testid="resume">
      Thank you for checking my resume!
    </Wrapper>
  );
}

export default Resume;
