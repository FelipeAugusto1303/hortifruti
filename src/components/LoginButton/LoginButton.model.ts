export type LoginButtonProps = {
  user: {
    name?: string | null;
  };
  onClick: () => void;
  signout: () => void;
};
