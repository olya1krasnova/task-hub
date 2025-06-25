interface Props {
  title: string;
}

const SidebarHeader = ({ title }: Props) => {
  return <div className="mb-2.5 text-neutral-400 dark:text-white">{title}</div>;
};

export default SidebarHeader;
