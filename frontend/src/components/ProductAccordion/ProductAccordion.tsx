import { Fragment, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductAccordion = ({ description }: any) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Fragment>
      <Accordion
        sx={{
          border: "1px solid  transparent",
          boxShadow: "none",
          marginTop: "30px",
          marginBottom: "12px",
          ":before": {
            border: "1px solid transparent",
            backgroundColor: "transparent",
          },
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            border: "none",
            backgroundColor: "rgba(241,245,249,.8)",
            borderRadius: "10px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              border: "none",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "rgb(71,85,105,1)", fontSize: "14px" }}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          border: "1px solid  transparent",
          boxShadow: "none",
          marginBottom: "12px",
          ":before": {
            border: "1px solid transparent",
            backgroundColor: "transparent",
          },
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          sx={{
            border: "none",
            backgroundColor: "rgba(241,245,249,.8)",
            borderRadius: "10px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            FAQ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "rgb(71,85,105,1)", fontSize: "14px" }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default ProductAccordion;
