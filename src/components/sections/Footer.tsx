import { Landmark } from "../ui/Landmark/Landmark";

export const Footer = () => {
  return (
    <Landmark
      className="my-4 bg-blue-950 p-4 text-xl text-white"
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
