import {  Title, Content, List } from './TermsPage.styles'

const MarketingTermsPage = () => (
  <>
    <Title style={{ fontSize: '24px', fontWeight: 700, marginBottom: '32px', textAlign: 'left', letterSpacing: '-1px' }}>
      광고 및 마케팅 활용 동의
    </Title>
    <Content>
    Sayit이 제공하는 이벤트 및 혜택 등 정보를 이메일, 앱 푸시 알림 등으로 받아보실 수 있습니다. 마케팅 정보 수신 및 활용 동의 여부와 관계없이 회원가입 및 서비스를 이용하실 수 있습니다.
    </Content>
    <Title style={{ fontSize: '18px', fontWeight: 700, margin: '32px 0 8px 0', textAlign: 'left' }}>
      수집·이용목적
    </Title>
    <List>
      <li>1. 마케팅 및 분석</li>
      <li>2. 프로모션</li>
    </List>
    <Title style={{ fontSize: '18px', fontWeight: 700, margin: '32px 0 8px 0', textAlign: 'left' }}>
      수집·이용항목
    </Title>
    <List>
      <li>1. 서비스 이용 정보</li>
      <li>2. 수집∙이용항목은 마케팅 및 분석, 프로모션의 목적에 따라 달라질 수 있으며 수집 시점에 안내 후 동의여부를 별도 확인함</li>
    </List>
    <Title style={{ fontSize: '18px', fontWeight: 700, margin: '32px 0 8px 0', textAlign: 'left' }}>
      보유 및 이용기간
    </Title>
    <Content>동의 철회시까지</Content>
    <Title style={{ fontSize: '18px', fontWeight: 700, margin: '32px 0 8px 0', textAlign: 'left' }}>
      마케팅 활용 정보 수집 방법
    </Title>
    <Content>희망자에 한해 직접 입력</Content>
  </>
)

export default MarketingTermsPage 