import { h } from 'preact';
import Codebox from '../components/codebox/Codebox';
import InfoPalette from '../components/widgets/InfoPalette';
import InfoPaletteSmall from '../components/widgets/InfoPaletteSmall';
import Icon from '../components/icon/Icon';

export default ()=>(
	<div>
	   <Codebox>
		   <InfoPalette icon={<Icon type="envelope-o" />} iconBg="bg-aqua" title="Messages" number="1,410"/>
	   </Codebox>
   
	   <Codebox>
		   <InfoPalette icon={<Icon type="flag-o" />} iconBg="bg-green" title="Bookmarks" number="410"/>
	   </Codebox>
   
	   <Codebox>
		   <InfoPalette icon={<Icon type="calendar" />} type="bg-yellow" title="Events" number="41,410" progress="0.7" description="70% Increase in 30 Days" />
	   </Codebox>
   
	   <Codebox>
		   <InfoPalette icon={<Icon type="comments-o" />} type="bg-red" title="Comments" number="41,410" progress="0.8" description="80% Increase in 30 Days" />
	   </Codebox>
   
	   <Codebox>
		   <InfoPaletteSmall icon={<Icon type="shopping-cart" />} miniIcon={<Icon type="arrow-circle-right" />} moreInfo="More info" type="bg-aqua" title="New Orders" number="150"/>
	   </Codebox>
   
	   <Codebox>
		   <InfoPaletteSmall icon={<Icon type="user-plus" />} miniIcon={<Icon type="arrow-circle-right" />} moreInfo="More info" type="bg-yellow" title="User Registrations" number="44"/>
	   </Codebox>
   </div>
   )