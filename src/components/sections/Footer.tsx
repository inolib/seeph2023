import { Landmark } from "../ui/Landmark/Landmark";

export const Footer = () => {
  return (
    <Landmark
      className="mt-4 bg-blue-950 p-4 px-12 text-xl text-white"
      landmarkRole="contentinfo"
    >
      <div className="flex items-center justify-between">
        <p className="my-4">Copyright @ Tous droits réservés Inolib</p>
        <ul className="flex">
          <li>
            <a href="http://">
              <img
                alt="aller sur la page Youtube d'Inolib"
                src="/icone_youtube.png"
              />
            </a>
          </li>
          <li>
            <a href="http://">
              <img
                alt="aller sur la page Linkedin d'Inolib"
                src="/icone_linkedin.png"
              />
            </a>
          </li>
        </ul>
      </div>
    </Landmark>
  );
};
