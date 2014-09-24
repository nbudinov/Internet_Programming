import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;


public class Collects {
	private String[] keys = new String[] { "Bulgaria",  "Turkey",  "USA",  "Canada", 
											"Russia", "Italy",  "England"
										 };	
	public void mapEx()
	{
		Map<String, Integer> m = new HashMap<String, Integer>();
		
		m.put(keys[0], 7000000);
		m.put(keys[1], 70000000);
		m.put(keys[2], 65000000);
		m.put(keys[3], 5000000 );
		m.put(keys[4], 40000000);
		m.put(keys[5], 12345678);
		m.put(keys[6], 1000000);

		for( int next : m.values() )
		{
			System.out.printf(" %d    ", next);		
		}
		System.out.println();
		for( Entry<String, Integer> next : m.entrySet() )
		{
			if( next.getValue() > 10000000 ) 
				System.out.printf( " %s  %d  \n"  , next.getKey(), next.getValue());
		}	
	}	
	
}
