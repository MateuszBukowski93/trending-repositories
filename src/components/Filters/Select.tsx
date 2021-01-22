import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { getProgramingLanguages } from '../../api/getProgramingLanguages';
import rootStore from '../../stores/RootStore';

const Select = observer(() => {
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
        value={rootStore.filtersStore.language}
        onChange={(e) => {
          rootStore.filtersStore.setLanguage(e.target.value);
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
});

export default Select;
