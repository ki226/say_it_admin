import {
  Bold,
  Content,
  List,
  ListItem,
  NormalList,
  NormalListItem,
  Red,
  StartDate,
  SubTitle,
  Wrapper,
} from './styles';

export default function TermsPage() {
  return (
    <Wrapper>
      <h1>[서비스 이용 약관]</h1>
      <SubTitle>제1조 목적</SubTitle>
      <Content>
        Sayit을 이용해 주셔서 감사합니다! 이 약관은 Team Sayit(이하 "운영자")이 운영하는 "Sayit"
        서비스의 이용과 관련하여 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
      </Content>
      <SubTitle>제2조 용어의 정의</SubTitle>
      <Content>이 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</Content>
      <List>
        <ListItem>“운영자”라 함은 Sayit을 제공하고 운영하는 사람을 의미합니다.</ListItem>
        <ListItem>
          “회원”이라 함은 본 약관에 동의하고 Sayit에 회원가입을 한 자로서, 이용자격을 부여받은 자를
          의미합니다.
        </ListItem>
        <ListItem>
          ”서비스”라 함은 운영자가 회원에게 온라인으로 제공하는 Sayit과 관련된 제반 서비스를
          의미합니다.
        </ListItem>
        <ListItem>
          “사용자 ID”라 함은 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한
          문자와 숫자의 조합을 의미합니다.
        </ListItem>
        <ListItem>
          “비밀번호”란 회원이 부여 받은 사용자 ID와 일치된 회원임을 확인하고 회원의 정보 및 권익
          보호를 위하여 회원이 선정하여 비밀로 관리하는 문자와 숫자의 조합을 의미합니다.
        </ListItem>
        <ListItem>“콘텐츠”란 회원이 서비스를 통해 작성한 기록물 및 데이터를 의미합니다.</ListItem>
      </List>
      <SubTitle>제3조 약관 등의 명시</SubTitle>
      <List>
        <ListItem>
          운영자는 이 약관의 내용을 회원이 알 수 있도록 서비스 내에서 연결화면을 제공하는 방법으로
          공지합니다.
        </ListItem>
        <ListItem>
          운영자는 회원이 이 약관의 내용에 관하여 질의 및 응답을 할 수 있도록 조치합니다.
        </ListItem>
        <ListItem>
          약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을 명시하여 그 적용일자로부터
          최소한 7일 이전(회원에게 불리하거나 중대한 사항의 변경은 <Red>30일</Red> 이전)부터 그
          적용일자 경과 후 상당한 기간이 경과할 때까지 서비스 내 연결화면을 통해 공지합니다.
        </ListItem>
      </List>
      <SubTitle>제4조 약관 외 준칙</SubTitle>
      <Content>
        운영자는 필요한 사항과 서비스 내 질서를 유지하기 위하여 별도로 운영 정책을 공지 안내할 수
        있으며, 본 약관과 운영 정책이 중첩될 경우 운영 정책이 우선 적용됩니다.
      </Content>
      <SubTitle>제5조 이용 계약 체결</SubTitle>
      <List>
        <ListItem>
          이용 계약은 회원으로 등록하여 서비스를 이용하려는 자의 본 약관 내용에 대한 동의와 가입
          신청에 대하여 운영자의 이용 승낙으로 성립합니다.
        </ListItem>
        <ListItem>
          회원으로 등록하여 서비스를 이용하려는 자는 가입 신청 시 본 약관을 읽고 "동의 후
          회원가입"을 선택하는 것으로 본 약관에 대한 동의 의사 표시를 합니다.
        </ListItem>
      </List>
      <SubTitle>제6조 서비스 이용 신청</SubTitle>
      <List>
        <ListItem>
          회원으로 등록하여 서비스를 이용하려는 이용자는 서비스에서 요청하는 제반정보(사용자 ID,
          비밀번호)를 제공해야 합니다.
        </ListItem>
        <ListItem>
          타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은
          회원은 서비스 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌 받을
          수 있습니다.
        </ListItem>
        <ListItem>
          당사는 법정 대리인의 동의가 필요한 <Red>만 14세 미만 아동</Red>의 회원 가입을 받고 있지
          않습니다.
        </ListItem>
      </List>
      <SubTitle>제7조 개인정보처리방침</SubTitle>
      <Content>
        Sayit 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고 있지 않으며 이와 관련된
        부분은 Sayit의 <Bold>[개인정보처리방침]</Bold>을 따릅니다. 운영자는 관계 법령이 정하는 바에
        따라 회원 등록 정보를 포함한 회원의 개인정보를 보호하기 위하여 노력을 합니다. 단, 회원의
        귀책 사유로 인해 노출된 정보에 대해 운영자는 일체의 책임을 지지 않습니다. 운영자는 회원이
        미풍양속에 저해되거나 국가 안보에 위배되는 게시물 등 위법한 게시물을 등록 · 배포할 경우 관련
        기관의 요청이 있을 시 회원의 자료를 열람 및 해당 자료를 관련 기관에 제출할 수 있습니다.
      </Content>
      <SubTitle>제8조 운영자의 의무</SubTitle>
      <List>
        <ListItem>
          운영자는 이용 회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 가급적 빨리
          처리하여야 합니다. 다만, 개인적인 사정으로 신속한 처리가 곤란한 경우에는 사후에 공지 또는
          이용 회원에게 전자 우편을 보내는 등 최선을 다합니다.
        </ListItem>
        <ListItem>
          운영자는 계속적이고 안정적인 서비스 제공을 위하여 설비에 장애가 생기거나 유실된 때에는
          이를 지체 없이 수리 또는 복구할 수 있도록 노력합니다. 다만, 천재지변 또는 Sayit 운영자에게
          부득이한 사유가 있는 경우, 서비스 운영을 일시 정지할 수 있습니다.
        </ListItem>
      </List>
      <SubTitle>제9조 회원의 의무</SubTitle>
      <List>
        <ListItem>
          회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 운영 정책을
          준수하여야 하며, 다음의 행위를 해서는 안됩니다.
          <NormalList>
            <NormalListItem>Sayit 운영자를 사칭하는 행위</NormalListItem>
            <NormalListItem>운영자가 게시한 정보의 변경</NormalListItem>
            <NormalListItem>Sayit 및 제 3자의 저작권 등 지적재산권에 대한 침해</NormalListItem>
            <NormalListItem>Sayit의 명예를 손상시키거나 업무를 방해하는 행위</NormalListItem>
            <NormalListItem>
              운영자의 동의 없이 영리, 영업, 광고, 정치활동 등을 목적으로 Sayit을 사용하는 행위
            </NormalListItem>
            <NormalListItem>
              기타 관련 법령에서 금지하거나 선량한 풍속 기타 사회통념상 허용되지 않는 행위
            </NormalListItem>
            <NormalListItem>
              서비스의 이용 권한, 기타 이용계약 상 지위를 타인에게 양도, 증여하는 행위
            </NormalListItem>
            <NormalListItem>
              운영자나 Sayit의 동의 없이 제 3자에게 아이디를 제공하는 행위
            </NormalListItem>
          </NormalList>
        </ListItem>
        <ListItem>
          회원은 이 약관의 규정, 이용안내 및 Sayit과 관련하여 공지한 주의사항을 확인하고 준수할
          의무가 있습니다.
        </ListItem>
      </List>
      <SubTitle>제10조 서비스 이용 시간</SubTitle>
      <List>
        <ListItem>
          서비스 이용 시간은 업무 상 또는 기술 상 특별한 지장이 없는 한 연중무휴 1일 24시간을
          원칙으로 합니다. 단, Sayit은 시스템 정기 점검, 증설 및 교체를 위해 Sayit이 정한 날이나
          시간에 서비스를 일시 중단할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은 사전에
          공지하오니 수시로 참고하시길 바랍니다.
        </ListItem>
        <ListItem>
          단, Sayit은 다음 경우에 대하여 사전 공지나 예고없이 서비스를 일시적 혹은 영구적으로 중단할
          수 있습니다.
          <NormalList>
            <NormalListItem>
              긴급한 시스템 점검, 증설, 교체, 고장 혹은 오동작을 일으키는 경우
            </NormalListItem>
            <NormalListItem>
              국가비상사태, 정전, 천재지변 등의 불가항력적인 사유가 있는 경우
            </NormalListItem>
            <NormalListItem>
              전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우
            </NormalListItem>
            <NormalListItem>
              서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
            </NormalListItem>
          </NormalList>
        </ListItem>
        <ListItem>
          전항에 의한 서비스 중단의 경우 Sayit은 사전에 공지사항 등을 통하여 회원에게 통지 합니다.
          단, Sayit이 통제할 수 없는 사유로 발생한 서비스의 중단에 대하여 사전 공지가 불가능한
          경우에는 사후 공지로 대신합니다.
        </ListItem>
      </List>
      <SubTitle>제11조 서비스 이용 해지</SubTitle>
      <List>
        <ListItem>
          회원이 Sayit과의 이용 계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통하여 회원탈퇴
          신청을 하여야 합니다.
        </ListItem>
        <ListItem>
          회원이 회원탈퇴를 원하는 경우에는 고객센터 및 서비스 내 회원탈퇴 절차를 통하여 회원탈퇴를
          할 수 있습니다.
        </ListItem>
        <ListItem>
          회원탈퇴를 신청한 경우 Sayit과 관련된 회원 정보가 자동적으로 삭제됨으로 운영자는 더 이상
          해지 신청자의 정보를 볼 수 없습니다.
        </ListItem>
      </List>
      <SubTitle>제12조 서비스 이용 제한</SubTitle>
      <Content>
        회원은 다음 각 호의 구분에 따라 회원의 Sayit 이용을 제한할 수 있습니다. 해당 행위를 한
        경우에 Sayit은 회원의 서비스 이용 제한 및 적법한 조치를 취할 수 있으며 이용 계약을
        해지하거나 기간을 정하여 서비스를 중지할 수 있습니다.
      </Content>
      <NormalList>
        <NormalListItem>Sayit의 운영진, 직원 또는 관계자를 사칭하는 행위</NormalListItem>
        <NormalListItem>
          Sayit, 기타 제 3자의 인격권 또는 지적재산권을 침해하거나 업무를 방해하는 행위
        </NormalListItem>
        <NormalListItem>범죄와 결부된다고 객관적으로 판단되는 행위</NormalListItem>
        <NormalListItem>기타 관련 법령에 위배되는 행위</NormalListItem>
      </NormalList>
      <SubTitle>제13조 콘텐츠의 보관</SubTitle>
      <Content>
        Sayit 운영자가 불가피한 사정으로 본 Sayit을 중단하게 될 경우, 회원에게 사전 공지를 하고
        콘텐츠의 이전이 가능하도록 <Red>30일</Red> 이전부터 서비스 내 연결화면 및 전자우편을 통해
        공지합니다.
      </Content>
      <SubTitle>제14조 콘텐츠에 대한 저작권</SubTitle>
      <List>
        <ListItem>
          회원이 서비스 내에 기록한 데이터의 저작권은 회원에게 귀속됩니다. 또한 Sayit은 회원의 동의
          없이 콘텐츠를 상업적으로 이용할 수 없습니다. 다만 비영리 목적인 경우는 그러하지
          아니합니다.
        </ListItem>
        <ListItem>
          운영자는 회원이 게시하거나 등록하는 서비스 내의 내용물, 게시 내용에 대해 제12조 각 호에
          해당된다고 판단되는 경우 사전 통지 없이 삭제하거나 이동 또는 등록 거부할 수 있습니다.
        </ListItem>
      </List>
      <SubTitle>제15조 손해배상</SubTitle>
      <List>
        <ListItem>
          본 서비스에서 발생한 모든 민, 형법상 책임은 회원 본인에게 1차적으로 있습니다.
        </ListItem>
        <ListItem>
          본 서비스의 이용 및 데이터 손실에 대한 손해배상을 포함하여 간접 손해, 우발적 손해, 특별
          손해, 결과적 손해 또는 징벌적 손해에 대한 책임이 없습니다. 또한, 회원이 받은 손해가
          천재지변 등 불가항력적이거나 회원의 고의 또는 과실로 인하여 발생한 경우에도 손해배상을
          하지 않습니다.
        </ListItem>
      </List>
      <SubTitle>제16조 면책</SubTitle>
      <List>
        <ListItem>
          운영자는 회원이 Sayit의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스 자료에
          대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
        </ListItem>
        <ListItem>
          운영자는 본 서비스 기반 및 타 통신업자가 제공하는 전기통신서비스의 장애로 인한 경우에는
          책임이 면제되며 본 서비스 기반과 관련되어 발생한 손해에 대해서는 서비스의 이용약관에
          준합니다.
        </ListItem>
        <ListItem>운영자는 회원이 작성한 데이터와 관련하여 일체의 책임을 지지 않습니다. </ListItem>
        <ListItem>
          운영자는 회원의 귀책 사유로 인하여 서비스 이용의 장애가 발생한 경우에는 책임지지
          아니합니다.
        </ListItem>
        <ListItem>
          운영자는 서버 등 설비의 관리, 점검, 보수, 교체 과정 또는 소프트웨어의 운용 과정에서 고의
          또는 고의에 준하는 중대한 과실 없이 발생할 수 있는 시스템의 장애, 제 3자의 공격으로 인한
          시스템의 장애, 국내 외의 저명한 연구 기관이나 보안 관련 업체에 의해 대응 방법이 개발되지
          아니한 컴퓨터 바이러스 등의 유포나 기타 운영자가 통제할 수 없는 불가항력적 사유로 인한
          회원의 손해에 대하여 책임지지 않습니다.
        </ListItem>
        <ListItem>
          운영자는 전시, 사변, 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 기술적 결함 기타
          불가항력적 사유로 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.
        </ListItem>
      </List>
      <StartDate>이 약관은 2025.06.01부터 시행합니다.</StartDate>
    </Wrapper>
  );
}
