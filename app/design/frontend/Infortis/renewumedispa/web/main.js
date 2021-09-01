require(['jquery', 'jquery/ui'], function($){ 

        // $(document).ready(function($) {
           // setInterval(function(){
          	// $('[name="amcheckout.additional.date_of_birth"]').css('visibility', 'hidden');		
			
			// var valu = $('input[name="date_of_birth"]').val();

			// $('[name="amcheckout.additional.date_of_birth"] textarea').val(valu);	
			// define([
				// 'Magento_Ui/js/form/element/date',
				// 'jquery',
				// 'Magento_Checkout/js/model/payment/additional-validators',
				// 'Amasty_Checkout/js/model/payment-validators/dob-validator',
				// 'Amasty_Checkout/js/view/additional/register',
				// 'Amasty_Checkout/js/view/checkout/datepicker'
			// ], function (Component, $, paymentValidatorRegistry, dobValidator) {
				// 'use strict';
				// return Component.extend({

			  // onUpdate: function (newValue) {
						// this._super();
					   
							// this.source.trigger('amcheckout.additional:save');
					  
					// }
				// });
			// });
				
          // }, 100);
        // });
		});
		
		
		require(['jquery', 'jquery/ui'], function($){ 

        $(document).ready(function($) {
           // setInterval(function(){
                 var text = $('.action-save-address span').text();
                 var val = $('.action-save-address').attr('title', text);  

				  var text2 = $('.action-hide-popup span').text();
				    $('.action-hide-popup').attr('title', text2);  
					
					var text4 = $('.action-select-shipping-item span').text();
					//$('.action-select-shipping-item').attr('title', ' '); 
				    $('.action-select-shipping-item').attr('title', 'Ship Here'); 	

				var text3 = $('.action-show-popup span').text();
				    $('.action-show-popup').attr('title', text3);
					$('.action-show-popup').show();

			//TODO: Change this as it was a hotfix for selecting subsciptiions
			var isCheckOutPage = window.location.pathname.match(/checkout\/$/);

			if(isCheckOutPage) {
				var checkoutInterval = setInterval(function(){
					var storePaymentVisible = $("#bluepay_payment_stored_acct_cb").length;
					var formVisible = $("#payment_form_bluepay_payment").length;
					var checkoutHasSubscription = window.checkoutConfig.quoteItemData.some(function(element) {return  element.product.subscription_active === "1"});

					if (checkoutHasSubscription && storePaymentVisible) {
						$("#bluepay_payment_stored_acct_cb option[value='0']").attr('disabled',"disabled");
						clearInterval(checkoutInterval);
					}
					if (formVisible) {
						clearInterval(checkoutInterval);
					}
				}, 1000);
			}


			// }, 100);
		     
			if ($(window).width() < 767) {
				jQuery(".sidebar-additional .block-content, .sidebar-additional .empty").addClass("no-display");
			    jQuery(".sidebar-additional .block").on("click",function(e) {		
					if(($(e.target).hasClass('block-title')) || ($(e.target).parent().hasClass('block-title')) ){						
						jQuery(this).toggleClass("active");
						jQuery(this).find(".block-content").toggleClass("no-display");
						jQuery(this).find(".empty").toggleClass("no-display");
					}
				}); // Toggle close
			};
	   });
	});
       
   