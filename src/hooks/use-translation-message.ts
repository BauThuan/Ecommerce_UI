import { useTranslation } from "react-i18next";

interface Variables {
  [key: string]: string;
}
export const useTranslationMessage = () => {
  const { t: formatMessage } = useTranslation();
  const getMessage = (template: string, variables?: Variables) => {
    const match = template.match(/^[^{]*/);
    const key = match ? match[0] : template;
    if (variables) {
      return formatMessage(key, variables);
    }
    return formatMessage(key);
  };

  return {
    formatMessage: getMessage,
  };
};
