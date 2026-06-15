// Product database matching user criteria
const products = [
    // --- CAKES CATEGORY ---
    {
        id: "cake-01",
        name: "สตรอว์เบอร์รี่ชีสเค้ก (Strawberry Cheesecake)",
        category: "cakes",
        price: 110,
        type: "ชีสเค้ก / ขายดี",
        isBestSeller: true,
        image: "002.jpg",
        description: "สตรอว์เบอร์รี่ชีสเค้กเนื้อเนียนนุ่ม หวานซ่อนเปรี้ยวด้วยซอสสตรอว์เบอร์รี่เข้มข้นพร้อมผลสด"
    },
    {
        id: "cake-02",
        name: "เค้กวันเกิด (เค้กปอนด์)",
        category: "cakes",
        price: 650,
        type: "เค้กปอนด์",
        isBestSeller: false,
        image: "",
        description: "เค้กวันเกิดสั่งทำขนาด 1 ปอนด์ สามารถเลือกรสชาติและเขียนหน้าเค้กได้ตามต้องการ"
    },
    {
        id: "cake-03",
        name: "เค้กชิ้น วานิลลา",
        category: "cakes",
        price: 75,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กชิ้นวานิลลาเนื้อสปันจ์นุ่มเบา หอมกลิ่นฝักวานิลลาแท้และบัตเตอร์ครีมสูตรเฉพาะ"
    },
    {
        id: "cake-04",
        name: "เค้กชิ้น ช็อกโกแลตเข้มข้น",
        category: "cakes",
        price: 85,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กช็อกโกแลตเนื้อเข้มข้นสลับชั้นด้วยช็อกโกแลตฟัดจ์หน้านิ่ม รสชาติหวานกำลังดี"
    },
    {
        id: "cake-05",
        name: "เค้กชิ้น มอคค่า/กาแฟ",
        category: "cakes",
        price: 80,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กรสกาแฟคาปูชิโน่กลมกล่อม หอมกรุ่นด้วยผงกาแฟคั่วบดชั้นดี"
    },
    {
        id: "cake-06",
        name: "เค้กชิ้น มะพร้าวอ่อน",
        category: "cakes",
        price: 90,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กมะพร้าวอ่อนซอสนมสดใบเตยแท้ แต่งหน้าด้วยเนื้อมะพร้าวอ่อนเคี่ยวจนนุ่มละมุน"
    },
    {
        id: "cake-07",
        name: "เค้กชิ้น ส้มหน้านิ่ม",
        category: "cakes",
        price: 75,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กส้มสปันจ์ราดซอสส้มแมนดารินหน้านิ่ม รสเปรี้ยวหวานสดชื่นตื่นเต็มตา"
    },
    {
        id: "cake-08",
        name: "เค้กชิ้น สตรอว์เบอร์รี่ครีมสด",
        category: "cakes",
        price: 85,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กสปันจ์เนื้อนุ่มเบา แทรกด้วยวิปครีมสดแท้และชิ้นสตรอว์เบอร์รี่สด"
    },
    {
        id: "cake-09",
        name: "เค้กชิ้น บลูเบอร์รี่",
        category: "cakes",
        price: 85,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กสปันจ์แต่งครีมสดหวานละมุน พร้อมราดด้วยบลูเบอร์รี่กวนสูตรโฮมเมด"
    },
    {
        id: "cake-10",
        name: "เค้กชิ้น ผลไม้รวม",
        category: "cakes",
        price: 90,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กวานิลลาครีมสดตกแต่งหนาแน่นด้วยผลไม้สดหลากชนิด เช่น ส้ม สตรอว์เบอร์รี่ กีวี่ และบลูเบอร์รี่"
    },
    {
        id: "cake-11",
        name: "เค้กชิ้น คลาสสิกชีสเค้ก",
        category: "cakes",
        price: 95,
        type: "ชีสเค้ก",
        isBestSeller: false,
        image: "",
        description: "นิวยอร์กชีสเค้กสูตรดั้งเดิม เนื้อแน่นหอมครีมชีสแท้จากออสเตรเลียและฐานบิสกิตเนย"
    },
    {
        id: "cake-12",
        name: "เค้กชิ้น บลูเบอร์รี่ชีสเค้ก",
        category: "cakes",
        price: 110,
        type: "ชีสเค้ก",
        isBestSeller: false,
        image: "",
        description: "ชีสเค้กเนื้อครีมละมุน ท็อปปิ้งด้วยบลูเบอร์รี่ไซรัปเปรี้ยวหวานเข้ากันลงตัว"
    },
    {
        id: "cake-13",
        name: "เค้กชิ้น ชาเขียวมัทฉะ",
        category: "cakes",
        price: 90,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กชาเขียวมัทฉะแท้ส่งตรงจากอูจิ ประเทศญี่ปุ่น รสเข้มข้น หวานน้อย"
    },
    {
        id: "cake-14",
        name: "เค้กชิ้น คาราเมลแมคคาเดเมีย",
        category: "cakes",
        price: 95,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กคาราเมลหอมกลิ่นน้ำตาลเคี่ยว ท็อปด้วยถั่วแมคคาเดเมียเม็ดโตเคลือบคาราเมลกรุบกรอบ"
    },
    {
        id: "cake-15",
        name: "เค้กชิ้น เรดเวลเวท (Red Velvet)",
        category: "cakes",
        price: 95,
        type: "เค้กชิ้น",
        isBestSeller: false,
        image: "",
        description: "เค้กเรดเวลเวทสีแดงสะดุดตา สลับชั้นด้วยครีมชีสฟรอสติ้งรสเปรี้ยวนิดๆ"
    },

    // --- PASTRIES CATEGORY ---
    {
        id: "pastry-01",
        name: "ทาร์ตไข่ (Egg Tart)",
        category: "pastries",
        price: 45,
        type: "ทาร์ต / ขายดี",
        isBestSeller: true,
        image: "003.jpg",
        description: "ทาร์ตไข่สูตรพิเศษ แป้งพายกรอบเป็นชั้นๆ ด้านในเป็นคัสตาร์ดไข่เนื้อนุ่มละมุน ละลายในปาก"
    },
    {
        id: "pastry-02",
        name: "ขนมปังไส้สังขยาใบเตย",
        category: "pastries",
        price: 35,
        type: "ขนมปังอบ",
        isBestSeller: false,
        image: "",
        description: "ขนมปังแป้งนุ่มๆ อัดแน่นด้วยไส้สังขยาใบเตยแท้คั้นสด รสชาติหวานมันกำลังดี"
    },
    {
        id: "pastry-03",
        name: "ขนมปังไส้หมูแดง",
        category: "pastries",
        price: 40,
        type: "ขนมปังอบ",
        isBestSeller: false,
        image: "",
        description: "ขนมปังไส้หมูแดงอบหอมๆ ไส้ในหมูแดงรสชาติเข้มข้นสไตล์ฮ่องกง"
    },
    {
        id: "pastry-04",
        name: "ขนมปังฝรั่งเศส (Baguette)",
        category: "pastries",
        price: 60,
        type: "ขนมปังฝรั่งเศส",
        isBestSeller: false,
        image: "",
        description: "บาแกตต์สไตล์ฝรั่งเศสแท้ๆ ผิวนอกกรอบเนื้อในเหนียวนุ่ม เหมาะสำหรับทานคู่กับซุปหรือชีส"
    },
    {
        id: "pastry-05",
        name: "เลมอนทาร์ต (Lemon Tart)",
        category: "pastries",
        price: 75,
        type: "ทาร์ต",
        isBestSeller: false,
        image: "",
        description: "ทาร์ตเลมอนครีมเปรี้ยวสดชื่นจากน้ำเลมอนแท้ๆ แต่งหน้าด้วยเมอแรงค์เผาไฟเบาๆ"
    },
    {
        id: "pastry-06",
        name: "พายแอปเปิ้ล (Apple Pie)",
        category: "pastries",
        price: 80,
        type: "พาย",
        isBestSeller: false,
        image: "",
        description: "พายแอปเปิ้ลอบร้อนๆ แป้งพายเนยสดหอมกรุ่น สอดไส้แอปเปิ้ลเขียวเคี่ยวชินนามอน"
    },
    {
        id: "pastry-07",
        name: "สโคนเนยสด (Scone)",
        category: "pastries",
        price: 55,
        type: "ขนมอบอังกฤษ",
        isBestSeller: false,
        image: "",
        description: "สโคนเนยสดดั้งเดิม ทานคู่กับคล็อตเต็ดครีมและแยมสตรอว์เบอร์รี่เข้ากันที่สุด"
    },

    // --- COOKIES & SNACKS CATEGORY ---
    {
        id: "cookie-01",
        name: "ชูครีม (Chou Cream)",
        category: "cookies",
        price: 50,
        type: "ของว่าง / ขายดี",
        isBestSeller: true,
        image: "004.jpg",
        description: "ชูครีมแป้งบางกรอบนอกนุ่มใน อัดแน่นด้วยคัสตาร์ดครีมสดแท้รสวานิลลา หวานนุ่มละมุนละไม"
    },
    {
        id: "cookie-02",
        name: "คุกกี้เนยสดแท้ (Butter Cookies)",
        category: "cookies",
        price: 120,
        type: "คุกกี้บรรจุกล่อง",
        isBestSeller: false,
        image: "",
        description: "คุกกี้เนยสดแท้เกรดพรีเมียม กลิ่นเนยสดหอมเตะจมูก ละลายในปากกล่องขนาด 200 กรัม"
    },
    {
        id: "cookie-03",
        name: "ช็อกโกแลตชิพคุกกี้ (Chocolate Chip Cookies)",
        category: "cookies",
        price: 130,
        type: "คุกกี้บรรจุกล่อง",
        isBestSeller: false,
        image: "",
        description: "คุกกี้ช็อกชิพกรอบนอกนุ่มใน อัดแน่นด้วยช็อกโกแลตชิพเกรดนำเข้าถึง 40%"
    },
    {
        id: "cookie-04",
        name: "เอแคลร์นมสด (Eclair)",
        category: "cookies",
        price: 45,
        type: "ของว่าง",
        isBestSeller: false,
        image: "",
        description: "เอแคลร์ลูกพอดีคำ ไส้ครีมนมสดหอมมันทะลักเต็มคำ แช่เย็นทานยิ่งอร่อย"
    },

    // --- CUSTOM MADE CATEGORY ---
    {
        id: "custom-01",
        name: "เค้กแต่งงานสั่งทำ (Wedding Cake)",
        category: "custom",
        price: 3500,
        type: "สั่งทำพิเศษ",
        isBestSeller: false,
        image: "",
        description: "เค้กแต่งงานออกแบบเฉพาะในสไตล์คุณ เลือกชั้นเค้กและรสชาติได้หลากหลาย (กรุณาสั่งล่วงหน้า 7 วัน)"
    },
    {
        id: "custom-02",
        name: "เค้กวันเกิดสั่งล่วงหน้า (Birthday Pre-Order)",
        category: "custom",
        price: 800,
        type: "สั่งทำพิเศษ",
        isBestSeller: false,
        image: "",
        description: "เค้กวันเกิด 3 มิติ หรือตกแต่งด้วยโมเดลฟองดองตามแบบที่ชื่นชอบ (กรุณาสั่งล่วงหน้า 3 วัน)"
    },
    {
        id: "custom-03",
        name: "เค้กตามสั่ง (Custom Made Cake)",
        category: "custom",
        price: 950,
        type: "สั่งทำพิเศษ",
        isBestSeller: false,
        image: "",
        description: "เค้กดีไซน์เฉพาะบุคคลสำหรับโอกาสสำคัญ วาดลาย คริสต์มาส เทศกาลต่างๆ (สั่งล่วงหน้า 2-3 วัน)"
    }
];

// Shopping Cart State
let cart = [];

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    // Nav scroll effect
    const navbar = document.querySelector(".navbar-custom");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Initialize Menu Category Render
    renderMenuItems("cakes");

    // Hook Menu Tabs clicks
    const tabButtons = document.querySelectorAll(".menu-tab-btn");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const targetCategory = button.getAttribute("data-category");
            renderMenuItems(targetCategory);
        });
    });

    // Hook catering set buy clicks
    const orderSetABtn = document.getElementById("order-set-a");
    const orderSetBBtn = document.getElementById("order-set-b");

    if (orderSetABtn) {
        orderSetABtn.addEventListener("click", () => {
            addCustomItemToCart("Catering Snack Box - Set A (จัดเบรค)", 45);
        });
    }
    if (orderSetBBtn) {
        orderSetBBtn.addEventListener("click", () => {
            addCustomItemToCart("Catering Snack Box - Set B (จัดเบรค)", 65);
        });
    }

    // Hook Contact Form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById("contact-name").value;
            const msg = document.getElementById("contact-message").value;
            showToast(`ส่งข้อความสำเร็จ! ขอบคุณคุณ ${name} ที่ติดต่อเรา`);
            contactForm.reset();
        };
    }

    // Hook Checkout Button
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            triggerCheckout();
        });
    }
});

// Render dynamic menu products
function renderMenuItems(category) {
    const grid = document.getElementById("menu-grid");
    if (!grid) return;
    
    // Smooth transition filter
    grid.style.opacity = 0;
    
    setTimeout(() => {
        grid.innerHTML = "";
        const filtered = products.filter(p => p.category === category);
        
        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "menu-item-card";
            
            // Detail of product card
            card.innerHTML = `
                <div>
                    <div class="menu-item-type">${p.type}</div>
                    <h4 class="menu-item-name">${p.name}</h4>
                    <p class="text-muted" style="font-size: 0.9rem;">${p.description}</p>
                </div>
                <div class="menu-item-footer">
                    <span class="menu-item-price">฿${p.price}</span>
                    <button class="btn-add-cart" onclick="addToCart('${p.id}')" aria-label="หยิบใส่ตะกร้า">
                        <i class="bi bi-plus-lg"></i>
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
        
        grid.style.opacity = 1;
    }, 150);
}

// Global functions for cart management (accessed from inline HTML)
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCartUI();
    showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว`);
};

// Add customized items (like Catering Set A / Set B)
function addCustomItemToCart(name, price) {
    const customId = `custom-${name.replace(/\s+/g, '-').toLowerCase()}`;
    const product = {
        id: customId,
        name: name,
        price: price,
        type: "บริการจัดเบรค",
        description: "ชุดกล่องขนมสำหรับจัดเลี้ยงอบสดใหม่วันต่อวัน"
    };

    const cartItem = cart.find(item => item.product.id === customId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCartUI();
    showToast(`เพิ่ม "${name}" ลงในตะกร้าเรียบร้อย`);
    
    // Open cart offcanvas
    const cartOffcanvas = document.getElementById("cartOffcanvas");
    if (cartOffcanvas) {
        const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvas);
        bsOffcanvas.show();
    }
}

window.changeQty = function(productId, delta) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (!cartItem) return;

    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.product.id !== productId);
    }

    updateCartUI();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
};

// Update cart panel UI
function updateCartUI() {
    // Badge counter
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartBadge = document.getElementById("cart-badge");
    if (cartBadge) {
        cartBadge.innerText = totalQty;
        cartBadge.style.display = totalQty > 0 ? "flex" : "none";
    }

    // Cart list
    const cartList = document.getElementById("cart-items-list");
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="text-center py-5 text-muted">
                <i class="bi bi-cart-x" style="font-size: 3rem; color: var(--accent-copper);"></i>
                <p class="mt-3">ยังไม่มีสินค้าในตะกร้าของคุณ</p>
            </div>
        `;
        document.getElementById("cart-summary-box").style.display = "none";
        document.getElementById("checkout-btn").disabled = true;
        return;
    }

    document.getElementById("cart-summary-box").style.display = "block";
    cartList.innerHTML = "";

    let subtotal = 0;
    let hasCake = false;

    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;
        
        if (item.product.category === "cakes") {
            hasCake = true;
        }

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-details">
                <p class="cart-item-name">${item.product.name}</p>
                <span class="cart-item-price">฿${item.product.price} x ${item.quantity}</span>
            </div>
            <div class="cart-qty-control ms-2">
                <button class="cart-qty-btn" onclick="changeQty('${item.product.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="cart-qty-btn" onclick="changeQty('${item.product.id}', 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.product.id}')" aria-label="ลบสินค้า">
                <i class="bi bi-trash"></i>
            </button>
        `;
        cartList.appendChild(div);
    });

    // Subtotal & Delivery Rules
    document.getElementById("cart-subtotal").innerText = `฿${subtotal}`;
    document.getElementById("cart-total").innerText = `฿${subtotal}`;
    
    const deliveryRuleBox = document.getElementById("delivery-status-box");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (subtotal >= 150) {
        let cakeMessage = hasCake ? "<br><small><i class='bi bi-truck-flatbed'></i> จัดส่งด่วนพิเศษควบคุมอุณหภูมิสำหรับเค้ก</small>" : "";
        deliveryRuleBox.innerHTML = `
            <div class="delivery-success">
                <i class="bi bi-check-circle-fill"></i>
                <div>
                    <span>ยอดซื้อครบ ฿150 สามารถเลือกจัดส่งเดลิเวอรี่ได้!</span>
                    ${cakeMessage}
                </div>
            </div>
        `;
        checkoutBtn.disabled = false;
    } else {
        const gap = 150 - subtotal;
        deliveryRuleBox.innerHTML = `
            <div class="delivery-warning">
                <i class="bi bi-exclamation-triangle-fill"></i>
                <span>ซื้ออีก ฿${gap} เพื่อผ่านเกณฑ์สั่งเดลิเวอรี่ (ขั้นต่ำ ฿150)</span>
            </div>
        `;
        checkoutBtn.disabled = true;
    }
}

// Trigger checkout simulation (copies text or redirects)
function triggerCheckout() {
    if (cart.length === 0) return;

    let subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    if (subtotal < 150) {
        showToast("ยอดสั่งซื้อไม่ถึง 150 บาทสำหรับการจัดส่ง");
        return;
    }

    let summaryText = `*ร้านเบเกอรี่ Warm Blend*\n📦 *รายการสั่งซื้อใหม่*\n--------------------\n`;
    cart.forEach((item, index) => {
        summaryText += `${index + 1}. ${item.product.name} x ${item.quantity} (฿${item.product.price * item.quantity})\n`;
    });
    summaryText += `--------------------\n💰 *ยอดรวมชำระ:* ฿${subtotal}\n📞 ติดต่อผู้ซื้อ: [กรอกเบอร์โทรของคุณที่นี่]\n🛵 บริการจัดส่งฟรีในระยะ 5 กิม. (รถเก็บความเย็นสำหรับเค้ก)\nขอบคุณที่ใช้บริการ Warm Blend ครับ!`;

    // Show a beautiful modal detailing the copy-to-clipboard WhatsApp/Line format
    const modalBody = document.getElementById("checkout-modal-body");
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="mb-3">
                <label for="orderTextarea" class="form-label text-bold">ข้อมูลการสั่งซื้อที่จะส่งไปยังร้าน:</label>
                <textarea class="form-control form-control-custom" id="orderTextarea" rows="8" readonly>${summaryText}</textarea>
            </div>
            <p class="text-muted small"><i class="bi bi-info-circle"></i> กดปุ่ม "คัดลอกข้อมูล" ด้านล่าง แล้วส่งไปยัง LINE ID ของร้าน หรือติดต่อโทร 0989574756 เพื่อคอนเฟิร์มออเดอร์</p>
        `;
        
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        checkoutModal.show();
    }
}

// Copy order format action
window.copyOrderText = function() {
    const copyText = document.getElementById("orderTextarea");
    if (copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
        showToast("คัดลอกข้อมูลคำสั่งซื้อไปยังคลิปบอร์ดแล้ว!");
    }
};

// Premium Toast Notification helper
function showToast(message) {
    // Create toast container if not existing
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.style.position = "fixed";
        container.style.bottom = "20px";
        container.style.right = "20px";
        container.style.zIndex = "9999";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.style.backgroundColor = "var(--primary-chocolate)";
    toast.style.color = "var(--bg-warm-yellow)";
    toast.style.padding = "1rem 1.5rem";
    toast.style.borderRadius = "12px";
    toast.style.marginBottom = "10px";
    toast.style.boxShadow = "var(--shadow-medium)";
    toast.style.minWidth = "250px";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.justifyContent = "space-between";
    toast.style.animation = "fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    toast.style.fontSize = "0.95rem";
    toast.style.fontWeight = "500";
    toast.style.borderLeft = "4px solid var(--accent-copper)";

    toast.innerHTML = `
        <span>${message}</span>
        <button style="background:none; border:none; color:white; font-size:1.2rem; cursor:pointer; margin-left:15px; opacity:0.8;" onclick="this.parentElement.remove()">×</button>
    `;

    container.appendChild(toast);

    // Auto-remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}
