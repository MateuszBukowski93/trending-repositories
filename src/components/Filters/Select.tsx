import React, { useState, useEffect, useContext } from 'react';
import { getProgramingLanguages } from '../../api/getProgramingLanguages';
import { StoreContext } from '../../store/RepositoriesStore';

const Select = () => {
  const store = useContext<RepositoriesStore>(StoreContext);
  const [language, setLanguage] = useState<string>(localStorage.language);
  const [languageOptions, setLanguageOptions] = useState<ProgramingLanguage[]>(
    []
  );

  useEffect(() => {
    getProgramingLanguages().then((languages: ProgramingLanguage[]) => {
      setLanguageOptions(languages);
    });
  }, []);

  return (
    <div>
      <select
        name='languages'
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          store.updateLanguage(e.target.value);
        }}
      >
        {languageOptions.map((lang) => (
          <option value={lang.urlParam} key={lang.name}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
