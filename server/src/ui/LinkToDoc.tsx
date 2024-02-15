import { useFormFields } from 'payload/components/forms';
import CopyToClipboard from 'payload/dist/admin/components/elements/CopyToClipboard';
import { UIField } from 'payload/dist/fields/config/types';
import React from 'react';

export const LinkToDoc: React.FC<
  UIField & {
    isTestKey: boolean;
    stripeResourceType: string;
    nameOfIDField: string;
  }
> = (props) => {
  const { isTestKey, stripeResourceType, nameOfIDField } = props;

  const field = useFormFields(([fields]) => fields[nameOfIDField]);
  const { value: stripeID } = field || {};

  const stripeEnv = isTestKey ? 'test/' : '';
  const href = `https://dashboard.stripe.com/${stripeEnv}${stripeResourceType}/${stripeID}`;

  if (stripeID) {
    return (
      <div>
        <div>
          <span
            className='label'
            style={{
              color: '#9A9A9A',
            }}
          >
            View in Stripe
          </span>
          <CopyToClipboard value={href as string} />
        </div>
        <div
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: '600',
          }}
        >
          <a href={href as string} target='_blank' rel='noreferrer noopener'>
            {href}
          </a>
        </div>
      </div>
    );
  }

  return null;
};
