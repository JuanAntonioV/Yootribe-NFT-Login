import IntlTelInput from 'react-intl-tel-input-v2';
import { useGetIPData } from '../hooks/useGetIPData';

export const IntlTelInputByIp = ({ ...intlInputProps }) => {
  const getIPData = useGetIPData();

  return (
    <IntlTelInput
      {...intlInputProps}
      defaultCountry={getIPData?.country_code?.toLowerCase()}
      inputProps={{ maxLength: 11, style: { width: '100%' } }}
    />
  );
};
