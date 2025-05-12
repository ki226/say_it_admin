import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* size 속성에 따른 스타일 */
  ${(props) =>
    props.size === "small" &&
    css`
      padding: ${props.theme.space.xs} ${props.theme.space.sm};
      font-size: ${props.theme.fontSize.xs};
    `}

  ${(props) =>
    (props.size === "medium" || !props.size) &&
    css`
      padding: ${props.theme.space.sm} ${props.theme.space.md};
      font-size: ${props.theme.fontSize.sm};
    `}
  
  ${(props) =>
    props.size === "large" &&
    css`
      padding: ${props.theme.space.md} ${props.theme.space.lg};
      font-size: ${props.theme.fontSize.base};
    `}
  
  /* primary 속성에 따른 스타일 */
  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
      border: none;

      &:hover {
        background-color: #0056b3;
      }
    `}
  
  ${(props) =>
    !props.primary &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.primary};
      border: 1px solid ${props.theme.colors.primary};

      &:hover {
        background-color: rgba(0, 123, 255, 0.1);
      }
    `}
`;

const Button = ({ primary, size, children, onClick }: ButtonProps) => {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
