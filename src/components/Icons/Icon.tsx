import Svg, {Path} from 'react-native-svg';
import React from 'react';
import colors from '../../constants/colors';

interface Props {
  color?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  path: string;
  style?: any;
}
const Icon: React.FC<Props> = ({
  color = colors.WHITE_BASE,
  width = 30,
  height = 30,
  //   viewBox = '0 0 30 30',
  path,
  style,
}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path d={path} fill={color} />
    </Svg>
  );
};
export default Icon;
