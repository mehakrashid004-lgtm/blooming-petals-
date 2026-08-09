// ==============================================
// SIMPLE FLOWER DECOR SYSTEM
// Works for all pages: engagement, birthday, wedding
// ==============================================

// ==============================================
// FLOWERS DATA - ALL CATEGORIES
// ==============================================
const allFlowersData = {
  "engagement": [
    {
      "id": "e1",
      "title": "Elegant Blush-Themed",
      "description": "Outdoor setup with pastel drapes & soft lighting.",
      "image": "asset/engagment/Blush_Serenity_Engagement_Setup.jpg",
      "price": "PKR 25,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e2",
      "title": "Blush Pink Roses",
      "description": "Soft tones that whisper love and admiration.",
      "image": "asset/engagment/59351c003c97357a658ec9f91c65eac9.jpg",
      "price": "PKR 30,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e3",
      "title": "Scarlet Charm",
      "description": "Vibrant hues that speak louder than words.",
      "image": "asset/engagment/a43ea5c04909093940b786e1321f9d86.jpg",
      "price": "PKR 27,500",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e4",
      "title": "Soft Bloom Mix",
      "description": "Blended tones for an unforgettable gesture.",
      "image": "asset/engagment/14114d276568a229fcec3e076b36dfb8.jpg",
      "price": "PKR 22,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e5",
      "title": "Rosy Glow",
      "description": "Gentle pink roses that brighten every heart.",
      "image": "asset/engagment/e68c5a22071b727523ef0ed444f29bed.jpg",
      "price": "PKR 24,500",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e6",
      "title": "Rosy Elegance",
      "description": "Classic red roses for timeless expressions.",
      "image": "asset/engagment/e8453f99b9b977b93dcba1657385d7c0.jpg",
      "price": "PKR 28,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e7",
      "title": "Romantic Swing Harmony",
      "description": "Swing with roses — dreamy photos guaranteed.",
      "image": "asset/engagment/Romantic_Rose_Harmony_Swing.jpg",
      "price": "PKR 26,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e8",
      "title": "Semi-Arch Duo",
      "description": "Two semi-arches topped with flowers for an elegant look.",
      "image": "asset/engagment/two+flower+in+semi-arches+.webp",
      "price": "PKR 29,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "e9",
      "title": "Blushing Bloom Arch",
      "description": "Graceful arch to frame your special moment.",
      "image": "asset/engagment/Blushing_Bloom_Elegance_Arch.avif",
      "price": "PKR 31,000",
      "downloadFile": "asset/Downloads/Engagement/Romantic_Rose_Harmony_Swing.docx"
    }
  ],
  "birthday": [
    {
      "id": "b1",
      "title": "Velvet Red Roses",
      "description": "Passion, romance, and elegance in every bloom.",
      "image": "asset/birthdayy/18b39019083e419305bc60359cd3cfbf.jpg",
      "price": "PKR 20,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b2",
      "title": "Blush Pink Roses",
      "description": "Soft tones that whisper love and admiration.",
      "image": "asset/birthdayy/18edf06221a56cc1060a7d183f6e0184.jpg",
      "price": "PKR 22,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b3",
      "title": "Scarlet Charm",
      "description": "Vibrant hues that speak louder than words.",
      "image": "asset/birthdayy/1f30d2e4c77804e6a5387763248cd7b7.jpg",
      "price": "PKR 21,500",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b4",
      "title": "Soft Bloom Mix",
      "description": "Blended tones for an unforgettable gesture.",
      "image": "asset/birthdayy/2ad3ea2305c91788185a026e2ed459f5.jpg",
      "price": "PKR 19,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b5",
      "title": "Rosy Glow",
      "description": "Gentle pink roses that brighten every heart.",
      "image": "asset/birthdayy/895691e0a84d2669dfc6e4ef2381268d.jpg",
      "price": "PKR 23,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b6",
      "title": "Rosy Elegance",
      "description": "Classic red roses for timeless expressions.",
      "image": "asset/birthdayy/clicbliss_2.webp",
      "price": "PKR 24,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b7",
      "title": "Classic Bloom",
      "description": "Classic red roses for timeless expressions.",
      "image": "asset/birthdayy/e0c70e9c7022c7624bd33b2029fb2dbf.jpg",
      "price": "PKR 25,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b8",
      "title": "Royal Red",
      "description": "Classic red roses for timeless expressions.",
      "image": "asset/birthdayy/f7ef72d51a3dc78817cebd716bb1516b.jpg",
      "price": "PKR 26,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "b9",
      "title": "Elegant Rose Setup",
      "description": "Classic red roses for timeless expressions.",
      "image": "asset/birthdayy/Sba7b0d33d934464ba82e03ce7e869784K.webp",
      "price": "PKR 27,000",
      "downloadFile": "asset/Downloads/Birthday/Romantic_Rose_Harmony_Swing.docx"
    }
  ],
  "wedding": [
    {
      "id": "w1",
      "title": "Velvet Red Roses",
      "description": "Passion and romance in every bloom.",
      "image": "asset/wedding/pngtree-bridal-swings-floral-wedding-decor-picture-image_15560970.jpg",
      "price": "PKR 32,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "w2",
      "title": "Blush Pink Roses",
      "description": "Soft tones that whisper love.",
      "image": "asset/wedding/pngtree-stunning-wedding-sofa-with-gorgeous-flower-arrangements-picture-image_15943068.jpg",
      "price": "PKR 30,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "w3",
      "title": "Scarlet Charm",
      "description": "Vibrant hues for timeless beauty.",
      "image": "asset/wedding/pngtree-stylish-floral-wedding-decor-with-ornate-ivory-sofa-image_16461535.jpg",
      "price": "PKR 35,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "w4",
      "title": "Soft Bloom Mix",
      "description": "Elegance blended with affection.",
      "image": "asset/wedding/sophisticated-bridal-table-setting-with-cascading-greenery-blush-pink-roses-and-white-hydrangeas-against-illuminated-ivory-fabric-backdrop-photo.jpeg",
      "price": "PKR 28,500",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "w5",
      "title": "Rosy Glow",
      "description": "Gentle blooms that warm every heart.",
      "image": "asset/wedding/1592991921_weddingbling__20200621_171125_3.avif",
      "price": "PKR 26,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "w6",
      "title": "Rosy Elegance",
      "description": "Classic red for eternal love.",
      "image": "asset/wedding/17_120319032515.jpg",
      "price": "PKR 33,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    }
  ],
   "bridalShower": [
    {
      "id": "br1",
      "title": "Velvet Red Roses",
      "description": "Passion and romance in every bloom.",
      "image": "asset/wedding/pngtree-bridal-swings-floral-wedding-decor-picture-image_15560970.jpg",
      "price": "PKR 32,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "br2",
      "title": "Blush Pink Roses",
      "description": "Soft tones that whisper love.",
      "image": "asset/wedding/pngtree-stunning-wedding-sofa-with-gorgeous-flower-arrangements-picture-image_15943068.jpg",
      "price": "PKR 30,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "br3",
      "title": "Scarlet Charm",
      "description": "Vibrant hues for timeless beauty.",
      "image": "asset/wedding/pngtree-stylish-floral-wedding-decor-with-ornate-ivory-sofa-image_16461535.jpg",
      "price": "PKR 35,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "br4",
      "title": "Soft Bloom Mix",
      "description": "Elegance blended with affection.",
      "image": "asset/wedding/sophisticated-bridal-table-setting-with-cascading-greenery-blush-pink-roses-and-white-hydrangeas-against-illuminated-ivory-fabric-backdrop-photo.jpeg",
      "price": "PKR 28,500",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "br5",
      "title": "Rosy Glow",
      "description": "Gentle blooms that warm every heart.",
      "image": "asset/wedding/1592991921_weddingbling__20200621_171125_3.avif",
      "price": "PKR 26,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "br6",
      "title": "Rosy Elegance",
      "description": "Classic red for eternal love.",
      "image": "asset/wedding/17_120319032515.jpg",
      "price": "PKR 33,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    }
  ],
   "TableArrangement": [
    {
      "id": "t1",
      "title": "Velvet Red Roses",
      "description": "Passion and romance in every bloom.",
      "image": "asset/table_arrangment/istockphoto-916474968-612x612.jpg",
      "price": "PKR 32,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "t2",
      "title": "Blush Pink Roses",
      "description": "Soft tones that whisper love.",
      "image": "asset/table_arrangment/istockphoto-1197789061-612x612.jpg",
      "price": "PKR 30,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "t3",
      "title": "Scarlet Charm",
      "description": "Vibrant hues for timeless beauty.",
      "image": "asset/table_arrangment/tbs1_grande.jpg",
      "price": "PKR 35,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "t4",
      "title": "Soft Bloom Mix",
      "description": "Elegance blended with affection.",
      "image": "asset/table_arrangment/wedding-flower-tips-for-brides-meaning-2.jpg",
      "price": "PKR 28,500",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "t5",
      "title": "Rosy Glow",
      "description": "Gentle blooms that warm every heart.",
      "image": "asset/wedding/1592991921_weddingbling__20200621_171125_3.avif",
      "price": "PKR 26,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    },
    {
      "id": "t6",
      "title": "Rosy Elegance",
      "description": "Classic red for eternal love.",
      "image": "asset/wedding/17_120319032515.jpg",
      "price": "PKR 33,000",
      "downloadFile": "asset/Downloads/Wedding/Romantic_Rose_Harmony_Swing.docx"
    }
  ]
}

// CONFIGURATION
const COMPARE_KEY = "flowers_compare"; // localStorage key
const MAX_COMPARE = 4; // Maximum items to compare

// GLOBAL VARIABLES
let currentCategory = ""; // Current page category

// ==============================================
// 2. DETECT WHICH PAGE WE'RE ON
// ==============================================
function detectCategory() {
  // Check the page URL to determine category
  const url = window.location.pathname.toLowerCase();
  
  if (url.includes("engagement")) {
    return "engagement";
  } else if (url.includes("birthday")) {
    return "birthday";
  } else if (url.includes("wedding")) {
    return "wedding";
  } else if (url.includes("tablearrangement")) {
    return "TableArrangement";
  } else if (url.includes("BridalShower")) {
    return "BridalShower";
  }
  
  // Default fallback
  return "engagement";
}

// ==============================================
// 2. DATA IS ALREADY LOADED
// (Data comes from flowers-data.js file)
// ==============================================
// No need to load data - it's already available in allFlowersData variable!

// ==============================================
// 3. RENDER FLOWER CARDS
// ==============================================
function renderFlowerCards() {
  const container = document.getElementById("decor-container");
  
  if (!container) {
    console.error("Container not found!");
    return;
  }

  // Get flowers for current category
  const flowers = allFlowersData[currentCategory] || [];
  
  if (flowers.length === 0) {
    container.innerHTML = "<p>No items found for this category.</p>";
    return;
  }

  // Get currently selected items from localStorage
  const compareItems = getCompareItems();
  const compareIds = compareItems.map(item => item.id);

  // Clear container
  container.innerHTML = "";

  // Create cards
  flowers.forEach((flower, index) => {
    const isChecked = compareIds.includes(flower.id);
    
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-sm-12";
    col.setAttribute("data-aos", "zoom-in");
    col.setAttribute("data-aos-delay", (index + 1) * 100);

    col.innerHTML = `
      <div class="decor-card">
        <input 
          type="checkbox" 
          class="decor-checkbox" 
          data-id="${flower.id}" 
          ${isChecked ? "checked" : ""}
          aria-label="Add to compare"
        >
        <img src="${flower.image}" alt="${flower.title}">
        <div class="decor-card-body">
          <h3>${flower.title}</h3>
          <p>${flower.description}</p>
          <div class="price">${flower.price}</div>
          ${flower.downloadFile ? `
            <button class="btn-read-more" data-file="${flower.downloadFile}" data-title="${flower.title}">
              Read More
            </button>
          ` : ''}
        </div>
      </div>
    `;

    container.appendChild(col);
  });

  // Attach checkbox events
  attachCheckboxEvents();

  // Attach read more button events
  attachReadMoreEvents();

  // Refresh animations
  if (window.AOS) {
    AOS.refresh();
  }
}

// ==============================================
// 4. CHECKBOX EVENTS (Add/Remove from Compare)
// ==============================================
function attachCheckboxEvents() {
  const checkboxes = document.querySelectorAll(".decor-checkbox");
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      const itemId = this.dataset.id;
      
      if (this.checked) {
        // Add to compare
        addToCompare(itemId);
      } else {
        // Remove from compare
        removeFromCompare(itemId);
      }
    });
  });
}

// ==============================================
// 4.5. READ MORE BUTTON EVENTS (Download Word Files)
// ==============================================
function attachReadMoreEvents() {
  const readMoreButtons = document.querySelectorAll(".btn-read-more");
  
  readMoreButtons.forEach(button => {
    button.addEventListener("click", function() {
      const filePath = this.dataset.file;
      const title = this.dataset.title;
      
      if (filePath) {
        downloadWordFile(filePath, title);
      }
    });
  });
}

function downloadWordFile(filePath, title) {
  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.split("/").pop(); // Get filename from path
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log(`Downloading: ${title} - ${filePath}`);
}

// ==============================================
// 5. ADD ITEM TO COMPARE
// ==============================================
function addToCompare(itemId) {
  const compareItems = getCompareItems();
  
  // Check if already added
  if (compareItems.find(item => item.id === itemId)) {
    return;
  }
  
  // Check max limit
  if (compareItems.length >= MAX_COMPARE) {
    alert(`You can only compare up to ${MAX_COMPARE} items at a time.`);
    // Uncheck the checkbox
    const checkbox = document.querySelector(`.decor-checkbox[data-id="${itemId}"]`);
    if (checkbox) checkbox.checked = false;
    return;
  }
  
  // Find the item in all categories
  const item = findItemById(itemId);
  
  if (item) {
    compareItems.push(item);
    saveCompareItems(compareItems);
    updateCompareCounter();
  }
}

// ==============================================
// 6. REMOVE ITEM FROM COMPARE
// ==============================================
function removeFromCompare(itemId) {
  let compareItems = getCompareItems();
  compareItems = compareItems.filter(item => item.id !== itemId);
  saveCompareItems(compareItems);
  updateCompareCounter();
}

// ==============================================
// 7. FIND ITEM BY ID (searches all categories)
// ==============================================
function findItemById(itemId) {
  // Search in all categories
  for (let category in allFlowersData) {
    const items = allFlowersData[category];
    const found = items.find(item => item.id === itemId);
    if (found) {
      // Add category info to the item
      return { ...found, category: category };
    }
  }
  return null;
}

// ==============================================
// 8. LOCALSTORAGE FUNCTIONS
// ==============================================
function getCompareItems() {
  try {
    const data = localStorage.getItem(COMPARE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading compare items:", error);
    return [];
  }
}

function saveCompareItems(items) {
  try {
    localStorage.setItem(COMPARE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving compare items:", error);
  }
}

// ==============================================
// 9. UPDATE COMPARE COUNTER
// ==============================================
function updateCompareCounter() {
  const counter = document.getElementById("compare-count");
  const compareBar = document.getElementById("compare-bar");
  
  if (counter) {
    const count = getCompareItems().length;
    counter.textContent = count;
    
    // Show/hide compare bar
    if (compareBar) {
      compareBar.style.display = count > 0 ? "flex" : "none";
    }
  }
}

// ==============================================
// 10. OPEN COMPARE MODAL
// ==============================================
function openCompareModal() {
  const modal = document.getElementById("compare-modal");
  const grid = document.getElementById("compare-grid");
  
  if (!modal || !grid) return;
  
  const compareItems = getCompareItems();
  
  // Clear grid
  grid.innerHTML = "";
  
  if (compareItems.length === 0) {
    grid.innerHTML = `
      <div style="text-align: center; padding: 40px; color: #6b4b52; grid-column: 1/-1;">
        <p>No items selected for comparison.</p>
        <p style="font-size: 0.9rem; margin-top: 10px;">Use the checkboxes on cards to add items.</p>
      </div>
    `;
  } else {
    // Create compare items
    compareItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "compare-item";
      
      div.innerHTML = `
        <label style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
          <input type="checkbox" class="cmp-remove-checkbox" data-id="${item.id}">
          <span style="font-size: 0.9rem;">Remove</span>
        </label>
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
        <h5 style="margin: 10px 0 5px 0; color: #e75480;">${item.title}</h5>
        <p style="color: #6b4b52; font-size: 0.9rem;">${item.description}</p>
        <div style="margin-top: 8px; font-weight: 600; color: #c7446a;">${item.price}</div>
        <div style="margin-top: 5px; font-size: 0.85rem; color: #999; text-transform: capitalize;">
          Category: ${item.category}
        </div>
      `;
      
      grid.appendChild(div);
    });
  }
  
  // Show modal
  modal.style.display = "flex";
}

// ==============================================
// 11. CLOSE COMPARE MODAL
// ==============================================
function closeCompareModal() {
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// ==============================================
// 12. REMOVE SELECTED FROM MODAL
// ==============================================
function removeSelectedFromModal() {
  const checkboxes = document.querySelectorAll(".cmp-remove-checkbox:checked");
  
  if (checkboxes.length === 0) {
    alert("Please select items to remove.");
    return;
  }
  
  // Get IDs to remove
  const idsToRemove = Array.from(checkboxes).map(cb => cb.dataset.id);
  
  // Remove from compare
  let compareItems = getCompareItems();
  compareItems = compareItems.filter(item => !idsToRemove.includes(item.id));
  saveCompareItems(compareItems);
  
  // Update UI
  updateCompareCounter();
  updateCheckboxesOnPage();
  openCompareModal(); // Refresh modal
}

// ==============================================
// 13. CLEAR ALL COMPARE ITEMS
// ==============================================
function clearAllCompare() {
  if (getCompareItems().length === 0) {
    return;
  }
  
  if (confirm("Clear all compare selections?")) {
    saveCompareItems([]);
    updateCompareCounter();
    updateCheckboxesOnPage();
    openCompareModal(); // Refresh modal
  }
}

// ==============================================
// 14. UPDATE CHECKBOXES ON PAGE
// ==============================================
function updateCheckboxesOnPage() {
  const compareItems = getCompareItems();
  const compareIds = compareItems.map(item => item.id);
  
  const checkboxes = document.querySelectorAll(".decor-checkbox");
  checkboxes.forEach(checkbox => {
    checkbox.checked = compareIds.includes(checkbox.dataset.id);
  });
}

// ==============================================
// 15. ATTACH MODAL EVENTS
// ==============================================
function attachModalEvents() {
  // Open modal button
  const openBtn = document.getElementById("open-compare");
  if (openBtn) {
    openBtn.addEventListener("click", openCompareModal);
  }
  
  // Close modal button
  const closeBtn = document.getElementById("close-compare");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCompareModal);
  }
  
  // Close on backdrop click
  const modal = document.getElementById("compare-modal");
  if (modal) {
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        closeCompareModal();
      }
    });
  }
  
  // Remove selected button
  const removeBtn = document.getElementById("remove-selected");
  if (removeBtn) {
    removeBtn.addEventListener("click", removeSelectedFromModal);
  }
  
  // Clear all button
  const clearBtn = document.getElementById("clear-all");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllCompare);
  }
}

// ==============================================
// 16. SYNC ACROSS TABS (Listen to localStorage changes)
// ==============================================
window.addEventListener("storage", function(e) {
  if (e.key === COMPARE_KEY) {
    updateCompareCounter();
    updateCheckboxesOnPage();
  }
});

// ==============================================
// 17. INITIALIZE EVERYTHING
// ==============================================
function initializeApp() {
  console.log("Initializing app...");
  
  // 1. Detect category
  currentCategory = detectCategory();
  console.log("Current category:", currentCategory);
  
  // 2. Data is already loaded from flowers-data.js
  
  // 3. Render cards
  renderFlowerCards();
  
  // 4. Update compare counter
  updateCompareCounter();
  
  // 5. Attach modal events
  attachModalEvents();
  
  console.log("App initialized successfully!");
}

// ==============================================
// 18. START THE APP WHEN PAGE LOADS
// ==============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}