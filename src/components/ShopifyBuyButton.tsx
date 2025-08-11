import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ShopifyBuy: any;
    shopifyProductComponent: any;
    shopifyUI: any;
    shopifyClient: any;
    addToShopifyCart: (qty: number) => void;
  }
}

interface ShopifyBuyButtonProps {
  quantity: number;
}

export const ShopifyBuyButton = ({ quantity }: ShopifyBuyButtonProps) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    console.log('ShopifyBuyButton component mounted - v9');
    
    if (isInitialized.current) {
      console.log('Already initialized, skipping');
      return;
    }
    
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    function loadScript() {
      console.log('Loading Shopify script...');
      const existingScript = document.querySelector(`script[src="${scriptURL}"]`);
      
      if (existingScript) {
        console.log('Script already exists in DOM');
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          console.log('ShopifyBuy already loaded, initializing...');
          ShopifyBuyInit();
        } else {
          console.log('Script exists but ShopifyBuy not ready, waiting...');
          let checkCount = 0;
          const checkInterval = setInterval(() => {
            checkCount++;
            if (window.ShopifyBuy && window.ShopifyBuy.UI) {
              console.log('ShopifyBuy now ready after waiting');
              clearInterval(checkInterval);
              ShopifyBuyInit();
            } else if (checkCount > 20) {
              console.error('ShopifyBuy failed to load after 10 seconds');
              clearInterval(checkInterval);
            }
          }, 500);
        }
        return;
      }

      console.log('Creating new script tag');
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = () => {
        console.log('Shopify script loaded successfully');
        ShopifyBuyInit();
      };
      script.onerror = (error) => {
        console.error('Failed to load Shopify script:', error);
      };
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    }

    function ShopifyBuyInit() {
      console.log('ShopifyBuyInit called');
      
      if (isInitialized.current) {
        console.log('Already initialized in ShopifyBuyInit, skipping');
        return;
      }
      
      isInitialized.current = true;
      
      if (!window.ShopifyBuy) {
        console.error('ShopifyBuy not available');
        return;
      }
      
      console.log('Building Shopify client...');
      
      try {
        const client = window.ShopifyBuy.buildClient({
          domain: 'airturn.myshopify.com',
          storefrontAccessToken: '6cfd400c787aaa7028d1accb15ae7a32',
        });

        console.log('Shopify client created:', client);
        window.shopifyClient = client;

        window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
          console.log('Shopify UI ready:', ui);
          
          if (!componentRef.current) {
            console.error('Component ref not available');
            return;
          }
          
          window.shopifyUI = ui;
          console.log('Creating product component with exact config...');
          
          // Use the EXACT configuration from the original Shopify embed
          ui.createComponent('product', {
            id: '9012083294467',
            node: componentRef.current,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              "product": {
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px"
                    }
                  },
                  "button": {
                    "font-weight": "bold",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#125799"
                    },
                    "background-color": "#1461aa",
                    ":focus": {
                      "background-color": "#125799"
                    },
                    "border-radius": "5px",
                    "padding-left": "58px",
                    "padding-right": "58px"
                  },
                  "quantityInput": {
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px"
                  }
                },
                "contents": {
                  "img": false,
                  "title": false,
                  "price": false
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "modalProduct": {
                "contents": {
                  "img": false,
                  "imgWithCarousel": true,
                  "button": false,
                  "buttonWithQuantity": true
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px"
                    }
                  },
                  "button": {
                    "font-weight": "bold",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#125799"
                    },
                    "background-color": "#1461aa",
                    ":focus": {
                      "background-color": "#125799"
                    },
                    "border-radius": "5px",
                    "padding-left": "58px",
                    "padding-right": "58px"
                  },
                  "quantityInput": {
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "option": {},
              "cart": {
                "styles": {
                  "button": {
                    "font-weight": "bold",
                    "font-size": "16px",
                    "padding-top": "16px",
                    "padding-bottom": "16px",
                    ":hover": {
                      "background-color": "#125799"
                    },
                    "background-color": "#1461aa",
                    ":focus": {
                      "background-color": "#125799"
                    },
                    "border-radius": "5px"
                  },
                  "title": {
                    "color": "#ffffff"
                  },
                  "header": {
                    "color": "#ffffff"
                  },
                  "lineItems": {
                    "color": "#ffffff"
                  },
                  "subtotalText": {
                    "color": "#ffffff"
                  },
                  "subtotal": {
                    "color": "#ffffff"
                  },
                  "notice": {
                    "color": "#ffffff"
                  },
                  "currency": {
                    "color": "#ffffff"
                  },
                  "close": {
                    "color": "#ffffff",
                    ":hover": {
                      "color": "#ffffff"
                    }
                  },
                  "empty": {
                    "color": "#ffffff"
                  },
                  "noteDescription": {
                    "color": "#ffffff"
                  },
                  "discountText": {
                    "color": "#ffffff"
                  },
                  "discountIcon": {
                    "fill": "#ffffff"
                  },
                  "discountAmount": {
                    "color": "#ffffff"
                  },
                  "cart": {
                    "background-color": "#000000"
                  },
                  "footer": {
                    "background-color": "#000000"
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout"
                },
                "popup": false
              },
              "toggle": {
                "styles": {
                  "toggle": {
                    "font-weight": "bold",
                    "background-color": "#1461aa",
                    ":hover": {
                      "background-color": "#125799"
                    },
                    ":focus": {
                      "background-color": "#125799"
                    }
                  },
                  "count": {
                    "font-size": "16px"
                  }
                }
              },
              "lineItem": {
                "styles": {
                  "variantTitle": {
                    "color": "#ffffff"
                  },
                  "title": {
                    "color": "#ffffff"
                  },
                  "price": {
                    "color": "#ffffff"
                  },
                  "fullPrice": {
                    "color": "#ffffff"
                  },
                  "discount": {
                    "color": "#ffffff"
                  },
                  "discountIcon": {
                    "fill": "#ffffff"
                  },
                  "quantity": {
                    "color": "#ffffff"
                  },
                  "quantityIncrement": {
                    "color": "#ffffff",
                    "border-color": "#ffffff"
                  },
                  "quantityDecrement": {
                    "color": "#ffffff",
                    "border-color": "#ffffff"
                  },
                  "quantityInput": {
                    "color": "#ffffff",
                    "border-color": "#ffffff"
                  }
                }
              }
            }
          });
          
          // The createComponent doesn't return a promise, it returns undefined
          // We need to wait a bit for the component to be created
          setTimeout(() => {
            console.log('=== Checking for product component after creation ===');
            
            // Get from UI components array
            if (ui.components && ui.components.product && ui.components.product.length > 0) {
              const productFromUI = ui.components.product[0];
              window.shopifyProductComponent = productFromUI;
              console.log('Stored product component from UI array:', productFromUI);
              console.log('Product has model?', !!productFromUI.model);
              if (productFromUI.model) {
                console.log('Product variants:', productFromUI.model.variants);
                console.log('Selected variant:', productFromUI.model.selectedVariant);
              }
            } else {
              console.error('Product component not found in UI components!');
            }
            
            // Create add to cart function V9 - use UI components directly
            window.addToShopifyCart = function(qty: number = 1) {
              console.log('=== addToShopifyCart V9 called ===');
              console.log('Quantity:', qty);
              
              try {
              // Method 1: Try clicking the hidden Shopify button directly
              const shopifyButton = document.querySelector('.shopify-buy__btn');
              if (shopifyButton) {
                console.log('Found Shopify button, updating quantity and clicking...');
                
                // Update quantity first
                const quantityInput = document.querySelector('.shopify-buy__quantity-input') as HTMLInputElement;
                if (quantityInput) {
                  quantityInput.value = qty.toString();
                  quantityInput.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                // Click the button
                (shopifyButton as HTMLElement).click();
                console.log('✅ Clicked Shopify button');
                return;
              }
              
              // Method 2: Access UI components directly
              const ui = window.shopifyUI;
              console.log('Shopify UI:', ui);
              
              if (!ui || !ui.components) {
                console.error('UI or components not available');
                return;
              }
              
              console.log('Available components:', Object.keys(ui.components));
              
              // Get cart and product from UI
              const cart = ui.components.cart && ui.components.cart[0];
              const product = ui.components.product && ui.components.product[0];
              
              console.log('Cart component:', cart);
              console.log('Product component:', product);
              
              if (!cart) {
                console.error('Cart component not found');
                return;
              }
              
              if (!product || !product.model) {
                console.error('Product or product model not available');
                return;
              }
              
              console.log('Product model:', product.model);
              console.log('Available variants:', product.model.variants);
              
              // Get the variant to add
              let variant = product.model.selectedVariant;
              if (!variant && product.model.variants && product.model.variants.length > 0) {
                variant = product.model.variants[0];
                console.log('Using first variant as fallback');
              }
              
              if (!variant) {
                console.error('No variant available to add');
                return;
              }
              
              console.log('Adding variant to cart:', variant);
              console.log('Quantity:', qty);
              
              // Add to cart
              cart.addVariantToCart(variant, qty).then(() => {
                console.log('✅ Successfully added to cart!');
                cart.open();
              }).catch((err: any) => {
                console.error('❌ Error adding to cart:', err);
              });
            } catch (error) {
              console.error('Error in addToShopifyCart:', error);
            }
          };
          
            console.log('✅ window.addToShopifyCart V9 is ready');
            console.log('All globals set:');
            console.log('- window.shopifyUI:', !!window.shopifyUI);
            console.log('- window.shopifyProductComponent:', !!window.shopifyProductComponent);
            console.log('- window.shopifyClient:', !!window.shopifyClient);
            console.log('- window.addToShopifyCart:', typeof window.addToShopifyCart === 'function');
            
            // Hide the product button after initialization
            setTimeout(() => {
              const productIframe = document.querySelector('iframe[name^="frame-product"]');
              if (productIframe && productIframe.parentElement) {
                console.log('Hiding product iframe');
                (productIframe.parentElement as HTMLElement).style.display = 'none';
              }
            }, 2000);
          }, 1000); // End of setTimeout for component initialization
          
        }).catch((error: any) => {
          console.error('Error in Shopify UI onReady:', error);
        });
      } catch (error) {
        console.error('Error initializing Shopify:', error);
      }
    }

    loadScript();
    
  }, []);

  return (
    <>
      <div 
        ref={componentRef}
        className="shopify-buy-container"
      />
      
      <style>{`
        /* Hide only the product button iframe */
        iframe[name^="frame-product"] {
          display: none !important;
        }
        
        /* Ensure cart is visible */
        .shopify-buy-frame--cart {
          display: block !important;
          position: fixed !important;
          right: 0 !important;
          top: 0 !important;
          height: 100% !important;
          z-index: 99999 !important;
        }
        
        /* Ensure toggle button is visible */
        .shopify-buy-frame--toggle {
          display: block !important;
          position: fixed !important;
          right: 20px !important;
          bottom: 20px !important;
          z-index: 99998 !important;
        }
        
        iframe[name^="frame-cart"] {
          display: block !important;
        }
        
        iframe[name^="frame-toggle"] {
          display: block !important;
        }
      `}</style>
    </>
  );
};