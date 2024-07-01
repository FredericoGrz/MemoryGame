import propTypes from "prop-types";

export function Cards({ children }) {
  return (
    <div className="flex gap-4 flex-wrap max-w-[1070px] justify-center items-center">
      {children}
    </div>
  );
}

Cards.propTypes = {
  children: propTypes.node.isRequired,
};
