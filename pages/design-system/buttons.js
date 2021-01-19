import DesignSystemLayoutDisplay from "../../components/DesignSystem/DesignSystemLayoutDisplay";
import ButtonListOfComponentsDesignSystem from "../../components/Buttons/ButtonListOfComponentsDesignSystem";
import { IconChevronLeft } from "../../components/Icons/IconChevron";
import ButtonX from "../../components/Buttons/ButtonX";
import {
  ButtonChevronLeft,
  ButtonChevronRight,
} from "../../components/Buttons/ButtonChevron";
import ButtonInfoMetadanych from "../../components/Buttons/ButtonInfoMetadanych";
import ButtonLogo from "../../components/Buttons/ButtonLogo";

export default function DesignSystemButtons() {
  return (
    <>
      <DesignSystemLayoutDisplay title="Buttons">
        <div className="flex flex-col">
          <div className="flex items-center mt-5">
            <ButtonListOfComponentsDesignSystem />
            <p className="ml-5 font-mono text-base font-normal text-gray-500">
              components/Buttons/ButtonListOfComponentsDesignSystem; default
              props: href=/ name=button
            </p>
          </div>

          <div className="flex items-center mt-5">
            <ButtonX
              href="/design-system"
              color="cyan-500"
              colorHover="gray-400"
            />
            <p className="ml-5 font-mono text-base font-normal text-gray-500">
              components/Buttons/ButtonX; default props: href=/ color=black
              colorHover=gray-200
            </p>
          </div>

          <div className="flex items-center mt-5">
            <ButtonChevronLeft
              href="/design-system"
              color="cyan-500"
              colorHover="gray-400"
            />
            <p className="ml-5 font-mono text-base font-normal text-gray-500">
              components/Buttons/ButtonChevronLeft; default props: href=/
              color=black colorHover=gray-200
            </p>
          </div>

          <div className="flex items-center mt-5">
            <ButtonChevronRight
              href="/design-system"
              color="cyan-500"
              colorHover="gray-400"
            />
            <p className="ml-5 font-mono text-base font-normal text-gray-500">
              components/Buttons/ButtonChevronRight; default props: href=/
              color=black colorHover=gray-200
            </p>
          </div>

          <div className="flex items-center mt-5">
            <ButtonInfoMetadanych
              href="/design-system"
              color="cyan-500"
              colorHover="gray-400"
            />
            <p className="ml-5 font-mono text-base font-normal text-gray-500">
              components/Buttons/ButtonInfoMetadanych; default props: href=/
              color=black colorHover=gray-200
            </p>
          </div>

          <div className="flex items-center mt-5">
            <ButtonLogo href="/" color="cyan-500" colorHover="gray-400">
              <IconChevronLeft color="gray-400" colorHover="gray-400" />
            </ButtonLogo>
            <p className="ml-5 font-mono text-base font-normal text-gray-500">
              components/Buttons/ButtonLogo; default props: href=/
              color=cyan-500 colorHover=gray-400 children=svg-icon
            </p>
          </div>
        </div>
      </DesignSystemLayoutDisplay>
    </>
  );
}
