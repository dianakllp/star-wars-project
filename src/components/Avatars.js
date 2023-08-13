import LukeLogo from "../AvatarsImages/luke.png";
import LeiaLogo from "../AvatarsImages/leia.png";
import R2_D2Logo from "../AvatarsImages/r2-d2.png";

const charactersAvatars = {
    "https://swapi.dev/api/people/1/": LukeLogo, 
    "https://swapi.dev/api/people/3/": R2_D2Logo,
    "https://swapi.dev/api/people/5/": LeiaLogo, 
}

export const getCharacterAvatarById = (id) => {
    return charactersAvatars[id];
}

const planetsAvatars = {  

}

export const getPlanetAvatarById = (id) => {
    return planetsAvatars[id];
}
