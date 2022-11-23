import React from "react";

const Supports = () => {
  return (
    <section className="container my-9 bg-slate-300 w-full mx-auto">
        <div className="grid md:grid-cols-4  p-6">
        <div className=" flex">
        <div className="w-24 rounded-full">
          <img className="rounded-full" alt="/" src="https://i.ibb.co/XF0wVPw/pngtree-cargo-business-shipping-png-image-785606.jpg" />
        </div>
        <div className="my-auto ml-4">
            <h3 className="text-lg font-semibold">FREE SHIPPING</h3>
            <p>On all orders over $99.00</p>
        </div>
      </div>
        <div className=" flex">
        <div className="w-24 rounded-full">
          <img className="rounded-full" alt="/" src="https://i.ibb.co/X3DtgBK/pngtree-returning-visitor-digital-marketing-png-image-1655549.jpg" />
        </div>
        <div className="my-auto ml-4">
            <h3 className="text-lg font-semibold">30 DAYS RETURN</h3>
            <p>You have 30 days to return</p>
        </div>
      </div>
        <div className=" flex">
        <div className="w-24 rounded-full">
          <img className="rounded-full" alt="/" src="https://i.ibb.co/nPMqknV/pngtree-safe-shop-logo-designs-secure-store-logo-vector-image-341567.jpg" />
        </div>
        <div className="my-auto ml-4">
            <h3 className="text-lg font-semibold">SAFE SHOPPING</h3>
            <p>Payment 100% secure</p>
        </div>
      </div>
        <div className=" flex">
        <div className="w-24 rounded-full">
          <img className="rounded-full h-full" alt="/" src="https://i.ibb.co/Rc1RqXh/pngtree-avatar-support-man-headphone-blue-icon-on-abstract-cloud-back-png-image-1646537.jpg" />
        </div>
        <div className="my-auto ml-4">
            <h3 className="text-lg font-semibold">ONLINE SUPPORT</h3>
            <p>Contact us 24 hours a day</p>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Supports;
