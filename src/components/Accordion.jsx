import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandIcon from "../icons/Expand";
import CheckIcon from "../icons/Check";
import getDocumentIcon from "../utils/getDocumentIcon";
import "../styling/_accordion.scss";

export default function CourseAccordion({ chapter, active, setActive }) {
  const { title, documents } = chapter;
  return (
    <div className="accordion" onClick={() => setActive(title)}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <div className={`${active === title ? "is_active" : null}`}>
            {title}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="document-list">
            {documents?.length > 0 &&
              documents.map((document, index) => {
                return (
                  <li
                    data-testId="listitem"
                    key={index}
                    className={`blue-hover ${
                      document?.completed && "completed"
                    }`}
                  >
                    <div className="document">
                      <span className="icon">
                        {getDocumentIcon(document?.type)}
                      </span>
                      <span>{document?.topic}</span>
                    </div>
                    {document?.completed && (
                      <span className="icon">
                        <CheckIcon />
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
