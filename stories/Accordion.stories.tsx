import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionItem } from '../src/components/Accordion';
import { H3, Paragraph } from '../src/components/Text';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const items: AccordionItem[] = [
  {
    id: 11453,
    title: 'Will I be getting a new Member ID?',
    body: (
      <Paragraph>
        Not to worry, your Member ID number will stay the same.
      </Paragraph>
    ),
  },
  {
    id: 11454,
    title: 'Where can I find my Membership ID?',
    body: (
      <Paragraph>
        You can find your Member ID in your Welcome Email or printed at the
        bottom of your Acknowledgement Letter.
      </Paragraph>
    ),
  },
  {
    id: 11455,
    title: 'Where do I log into to start getting tickets?',
    body: (
      <Paragraph>
        You can go{' '}
        <a
          href="https://tickets.nhmlac.org/auth/527/members?ref=https:%2F%2Ftickets.nhmlac.org%2Fmembership%2F527%2Fprofile"
          rel="noopener"
        >
          NHMLAC.org/MemberPortal
        </a>{' '}
        to begin reserving tickets for NHM or LBTP.
      </Paragraph>
    ),
  },
  {
    id: 11456,
    title: 'What information do I need to log in?',
    body: (
      <Paragraph>
        All you need is your Member ID and the Primary Member’s Last Name to log
        in to your Member Portal.
      </Paragraph>
    ),
  },
  {
    id: 11457,
    title: 'I just became a Member, how do I get my Membership cards?',
    body: (
      <Paragraph>
        As a New or Renewing Member, you’ll receive an email from{' '}
        <a href="mailto:members@nhm.org">members@nhm.org</a> with a link to
        download your Membership Card.
      </Paragraph>
    ),
  },
  {
    id: 11458,
    title: 'I am not seeing my digital card. Can you resend it?',
    body: (
      <Paragraph>
        The email containing your digital card came from{' '}
        <a href="mailto:members@nhm.org">members@nhm.org</a>. It may have gone
        to your spam folder. If you still don’t find it, please email{' '}
        <a href="mailto:members@nhm.org">members@nhm.org</a> and they can help
        resend the link.
      </Paragraph>
    ),
  },
  {
    id: 11460,
    title: 'How can I add the Secondary Adult?',
    body: (
      <div>
        <Paragraph>You can add the second name either:</Paragraph>
        <ul>
          <li>In person anytime during your visit at the ticketing counter</li>
          <li>
            By calling <a href="tel:213-763-3426">213.763.3426</a>
          </li>
          <li>
            By emailing <a href="mailto:members@nhm.org">members@nhm.org</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 11461,
    title: 'Can I update the Secondary Adult on my membership?',
    body: (
      <Paragraph>
        You can only update the Secondary Adult listed at the time of signing up
        or renewing your Membership. Please email{' '}
        <a href="mailto:members@nhm.org">members@nhm.org</a> for more
        information.
      </Paragraph>
    ),
  },
  {
    id: 11462,
    title:
      'I want the other person listed on the Membership to have their email added, is this possible?',
    body: (
      <Paragraph>
        Yes, you can do so when signing up. If you’d like to add the information
        and you already have a Membership, please email{' '}
        <a href="mailto:members@nhm.org">members@nhm.org</a> or{' '}
        <a href="mailto:info@nhm.org">info@nhm.org</a> or call{' '}
        <a href="tel:213-763-3426">213.763.3426</a> to speak with someone over
        the phone.
      </Paragraph>
    ),
  },
  {
    id: 11463,
    title:
      'I need to update my phone number, email address, or mailing address. Can I do that online in my portal?',
    body: (
      <div>
        <Paragraph>You can make any of the above updates:</Paragraph>
        <ul>
          <li>In person anytime during your visit at the ticketing counter</li>
          <li>
            By calling <a href="tel:213-763-3426">213.763.3426</a>
          </li>
          <li>
            By emailing <a href="mailto:members@nhm.org">members@nhm.org</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 11464,
    title:
      'There is an error or misspelling on my Membership, how can I get this fixed?',
    body: (
      <div>
        <Paragraph>You can do so by any of the options below:</Paragraph>
        <ul>
          <li>In person anytime during your visit at the ticketing counter</li>
          <li>
            Calling <a href="tel:213-763-3426">213.763.3426</a>
          </li>
          <li>
            Emailing <a href="mailto:members@nhm.org">members@nhm.org</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 11465,
    title: 'I received a gift membership, how can I redeem it?',
    body: (
      <div>
        <Paragraph>
          You can redeem your Gift Membership in-person at either NHM or LBTP,
          or by phone at <a href="tel:213-763-3426">213.763.3426</a>.
        </Paragraph>
        <Paragraph>
          Please make sure you are ready to provide the Order Number for the
          Gift Membership.
        </Paragraph>
      </div>
    ),
  },
  {
    id: 11466,
    title:
      'I am not able to make it to my upcoming visit. Can I change the date for my tickets?',
    body: (
      <Paragraph>
        Yes, make sure to reach out to{' '}
        <a href="mailto:members@nhm.org">members@nhm.org</a> or{' '}
        <a href="mailto:info@nhm.org">info@nhm.org</a>{' '}
        <strong>before the day of your reservation</strong>.
      </Paragraph>
    ),
  },
  {
    id: 11467,
    title:
      'I just bought tickets to visit the museum, but am considering purchasing a membership instead. Can I upgrade my tickets to a membership?',
    body: (
      <Paragraph>
        Yes, you have until the end of your visit to upgrade your single day
        tickets to a membership.
      </Paragraph>
    ),
  },
];

export const Default: Story = args => (
  <div style={{ maxWidth: 800 }}>
    <H3>Member Reservation and Digital Card Update</H3>
    <Accordion items={items} {...args} />
  </div>
);

Default.args = {};
