import styled from 'styled-components'

export const TermsContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: #fff;
  min-height: 100vh;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', sans-serif;
  color: #222;
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 28px;
  text-align: left;
  letter-spacing: -1px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 10px 0;
  color: #222;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const SubTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  margin: 18px 0 8px 0;
  color: #222;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 17px;
  }
`

export const Content = styled.div`
  font-size: 14px;
  line-height: 1.8;
  color: #222;
  word-break: break-all;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`

export const List = styled.ol`
  margin: 0 0 0 18px;
  padding: 0;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
  word-break: break-all;
  
  b {
    font-weight: 800;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`

export const UnorderedList = styled.ul`
  margin: 0 0 0 18px;
  padding: 0;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
  word-break: break-all;
  
  b {
    font-weight: 800;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`

export const Red = styled.span`
  color: #e74c3c;
  font-weight: bold;
`

export const FooterText = styled.p`
  margin-top: 32px;
  text-align: right;
  font-size: 13px;
  color: #888;
`

export const StrongBold = styled.b`
  font-weight: 800;
`

export const GlobalStyleBold = styled.div`
  b {
    font-weight: 800;
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  min-width: 700px;
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  font-size: 14px;
  color: #222;

  th, td {
    padding: 16px 12px;
    text-align: left;
    border-bottom: 1px solid #ededed;
    vertical-align: top;
    word-break: keep-all;
  }

  th {
    font-weight: 700;
    background: #fafafa;
    font-size: 15px;
    border-bottom: 2px solid #ededed;
  }

  tr:last-child td {
    border-bottom: none;
  }

  td {
    font-weight: 400;
  }

  @media (max-width: 480px) {
    th, td {
      padding: 12px 8px;
      font-size: 15px;
    }
  }
`;