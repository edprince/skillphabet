import { useEffect, useState } from "react"; { }
import skills from '../skills';

function Letter({ letter, index, update }) {
    const [placeholder, setPlaceholder] = useState('');
    const [val, setVal] = useState('');
    useEffect(() => {
        let skill = skills[letter][Math.floor(Math.random() * skills[letter].length)].substring(1);
        let storedSkills = localStorage.getItem('skills');
        if (storedSkills) {
            storedSkills = JSON.parse(storedSkills);
            if (storedSkills[letter]) setVal(storedSkills[letter])
        }
        setPlaceholder(skill);
    }, [])
    return (
        <>
            <div className='flex text-4xl'>
                <div>{letter}</div>
                <input value={val}
                    onChange={(e) => {
                        setVal(e.target.value)
                        let stored = localStorage.getItem('skills');
                        if (stored) {
                            stored = JSON.parse(stored);
                        } else {
                            stored = {};
                        }
                        stored[`${letter}`] = e.target.value;
                        if (e.target.value == '') delete stored[letter];
                        localStorage.setItem('skills', JSON.stringify(stored));
                        update(Math.floor((Object.keys(stored).length / 26) * 100));
                    }}
                    onKeyPress={(e) => {
                        console.log(e);
                        if (e.key == 'Enter') {
                            const nextSibling = document.querySelector(
                                `input[name=skill-${index + 1}]`
                            );
                            if (nextSibling !== null) {
                                nextSibling.focus();
                            }
                        }
                    }}
                    spellCheck='false'
                    className='w-full outline-0 rounded bg-transparent'
                    placeholder={placeholder}
                    name={`skill-${index}`}
                    autoCapitalize="none"
                    type='text'
                />
            </div>
        </>
    )
}

export default Letter;