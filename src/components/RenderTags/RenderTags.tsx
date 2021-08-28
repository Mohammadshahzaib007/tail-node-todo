import { Box } from "@material-ui/core";
import Tag from "../Tag/Tag";

type PropTypes = {
  tags: string[];
  onTagClick: () => void;
};

function RenderTags(props: PropTypes) {
  const { tags, onTagClick } = props;
  return (
    <Box
      width="100%"
      padding="10px 20px"
      borderBottom={`1px solid #888`}
      boxSizing="border-box"
      mb="1.5rem"
    >
      {tags.map((tag, i) => (
        <Tag key={i} children={tag} onTagClick={onTagClick} />
      ))}
    </Box>
  );
}

export default RenderTags;
