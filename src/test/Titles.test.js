import React from 'react'; 
import Titles from '../components/Titles';  
import renderer from 'react-test-renderer'; 

test('renders correctly', () => {  
 const tree = renderer    
 .create(<Titles/>)     
	.toJSON();  
	 expect(tree).toMatchSnapshot();  
	}); 