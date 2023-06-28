import { ScreenContainer } from "components/atoms";
import { AddVirtualCardForm } from "components/organisms/forms";

const AddNewVirtualCard = () => {
  const handleSuccess = () => console.log("Success adding a virtual card");

  return (
    <ScreenContainer>
      <AddVirtualCardForm onSuccess={handleSuccess} />
    </ScreenContainer>
  );
};

export { AddNewVirtualCard };
