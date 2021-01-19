import DesignSystemLayoutDisplay from "../../components/DesignSystem/DesignSystemLayoutDisplay";
import Miniaturka from "../../components/Miniaturka";

export default function DesignSystemMiniaturka() {
  return (
    <>
      <DesignSystemLayoutDisplay title="miniaturka">
        <Miniaturka imgPath="/img-dummy-150.png" imgAlt="Dummy img 150x" />
      </DesignSystemLayoutDisplay>
    </>
  );
}
