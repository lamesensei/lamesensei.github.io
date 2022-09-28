type SkillBadgeProps = { icon: string; text: string };

export const SkillBadge = ({ icon, text }: SkillBadgeProps): JSX.Element => (
  <li className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-light text-gray-800 m-1 ml-0">
    <i className={icon + " inline-block mr-2"}></i>
    <span className="inline-block">{text}</span>
  </li>
);
