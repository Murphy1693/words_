import React from "react";

const DefinitionEntry = ({ definitionObject }) => {
  return (
    <div
      style={{
        maxWidth: "300px",
        display: "flex",
        minWidth: "150px",
        minHeight: "200px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          minHeight: "18px",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {definitionObject.partOfSpeech}
      </div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {definitionObject.definition}
      </div>
      {definitionObject.synonyms ? (
        <ul style={{ marginTop: "auto" }}>
          {definitionObject.synonyms.map(function (syn, i) {
            return <li key={i}>{syn}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DefinitionEntry;

// definition: "a songbird that lives mainly on the ground in open country; has streaky brown plumage"
// hasTypes: (2) ['meadow pipit', 'anthus pratensis']
// memberOf: (2) ['anthus', 'genus anthus']
// partOfSpeech: "noun"
// synonyms: (2) ['pipit', 'titlark']
// typeOf: (2) ['oscine bird', 'oscine']
