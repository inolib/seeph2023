import { Landmark } from "../ui/Landmark/Landmark";

export const Footer = () => {
  return (
    <Landmark
      className="my-4 p-4 bg-blue-950 text-white text-xl"
      landmarkRole="contentinfo"
    >
      <p className="my-4">Copyright @ Tous droits réservés Inolib</p>
      <ul>
        <li>Politique d’accessibilité</li>
        <li>Mentions légales</li>
        <li>Glossaire</li>
        <li>FAQ</li>
      </ul>
    </Landmark>
  );
};
