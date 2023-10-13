import { createFromIconfontCN } from '@ant-design/icons';

const AntdIconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4073061_7g2n0gzdtj5.js',
});

export const IconFont: React.FC<{
  type: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}> = ({ type, size, color, className, onClick }) => {
  return (
    <AntdIconFont
      type={type}
      style={{ fontSize: size, color }}
      className={className}
      onClick={onClick}
    />
  );
};
