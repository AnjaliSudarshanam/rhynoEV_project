// src/pages/RefundPolicy.js
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="p-4 max-w-6xl text-white mx-auto">
      <h1 className="text-3xl font-bold text-[#BAB408] mb-4">Refund Policy</h1>
      <p className="mb-4">
        Thank you for shopping with <h3 className='text-[#BAB408] inline'><a href="/">RHYNOEV.</a></h3> If you are not entirely satisfied with your purchase, we’re here to help.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
      <p className="mb-4">
        Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
      </p>
      <h2 className="text-2xl font-semibold mb-2">To Request a Refund</h2>
      <p className="mb-4">
        Please contact us at {' '}<a href="mailto:rhynoev@gmail.com" className="text-blue-600 hover:underline">rhynoev@gmail.com</a> to request a refund. Include your order number and details about the issue you are experiencing.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Refund Processing</h2>
      <p className="mb-4">
        Once we receive your request, we will inspect the item and notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment, within a certain number of days.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Exchanges</h2>
      <p className="mb-4">
        We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at {' '}<a href="mailto:rhynoev@gmail.com" className="text-blue-600 hover:underline">rhynoev@gmail.com</a>.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Shipping Costs</h2>
      <p className="mb-4">
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
      </p>
      <p className="mb-4">
        Effective Date: 7/6/2024
      </p>
    </div>
  );
};

export default RefundPolicy;
