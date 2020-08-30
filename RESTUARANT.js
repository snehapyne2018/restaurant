
		$('document').ready(function(){
		// water ripples effect
			$('#header').ripples({ 
  				imageUrl:null,
  				resolution: 256,
  				dropRadius: 20,
  				perturbance: 0.04,
  				interactive:true,
  				crossOrigin:''
			});
		// magnificPopup
			$('.parent-container').magnificPopup({
  				delegate: 'a', 
 				type: 'image',
  				gallery: {enabled: true}
			});
		});
			// form-validation

			function validate()
			{	
				var username = document.f.f1.value;
				var phone = document.f.f2.value;
				var em = document.f.f3.value;

				var regx = /^[789][0-9]{9}$/;		//Mobile Number
				var regy = /^[A-Za-z\d{0,5}._]{5,20}\d{2,10}@[A-Za-z]{5,10}[.]{1}[A-Za-z]{3,5}[.A-Za-z]{0,2}$/;
							//Email Id

				if(username=="null" || username=="")
				{
					alert("Name cannot be blank");
					return false;
				}
				else
				{
					alert("Name is valid");
				}

				if(regx.test(phone))
				{
					alert("Contact number is valid");
				}
				else
				{
					alert("Contact number is invalid");
				}

				if(regy.test(em))
				{
					alert("Email id is valid");
				}
				else
				{
					alert("Email id is invalid");
				}
			}