import React from "react";

export const FieldContext = React.createContext({
  form: {},
  onChange: {},
  addField: {},
  onRichTextUpdate: {},
  onChangeImage: {}
});

export function FieldContextProvider(props) {
  const value = React.useMemo(
    () => ({
      form: props.form,
      onChange: props.onChange,
      addField: props.addField,
      onRichTextUpdate: props.onRichTextUpdate,
      onChangeImage: props.onChangeImage
    }),
    [props]
  );

  return (
    <FieldContext.Provider value={value}>
      {props.children}
    </FieldContext.Provider>
  );
}
