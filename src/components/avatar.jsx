import { useContext } from "react";
import { HomeContext } from "../contexts/contexHome";
import Avatar, { genConfig } from "react-nice-avatar";
import { AvatarEdit} from "../styles/avatar";

export const AvatarComponet = () => {
  const { configAvatar, setConfigAvatar } = useContext(HomeContext);

  const handleAttributeChange = (attribute, options) => {
    const currentValue = configAvatar[attribute];
    const currentIndex = options.indexOf(currentValue);
    const nextIndex = (currentIndex + 1) % options.length;
    const nextValue = options[nextIndex];
    setConfigAvatar((prevConfig) => ({
      ...prevConfig,
      [attribute]: nextValue,
    }));
  };
  const myConfig = genConfig(configAvatar);
  return (
    <AvatarEdit>
      <Avatar style={{ width: "70px", height: "70px" }} {...myConfig} className="avatarConfig"/>
      <div className="buttons">
        <button type="button"
          onClick={() =>
            handleAttributeChange("faceColor", ["#AC6651", "#F9C9B6"])
          }
        >
          Cor
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("hairStyle", [
              "normal",
              "thick",
              "mohawk",
              "womanLong",
              "womanShort",
            ])
          }
        >
          Penteado
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("hatStyle", ["none", "beanie", "turban"])
          }
        >
          Chapéu
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("eyeStyle", ["circle", "oval", "smile"])
          }
        >
          Olho
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("glassesStyle", ["none", "round", "square"])
          }
        >
          Óculos
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("noseStyle", ["short", "long", "round"])
          }
        >
          Nariz
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("mouthStyle", ["laugh", "smile", "peace"])
          }
        >
          Boca
        </button>
        <button type="button"
          onClick={() =>
            handleAttributeChange("shirtStyle", ["hoody", "short", "polo"])
          }
        >
          Camisa
        </button>
      </div>
    </AvatarEdit>
  );
};
