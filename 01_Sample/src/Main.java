

public class Main {
	
	
	@SuppressWarnings("null")
	public static void main( String[] args )
	{
		Thing[] things = new Thing[5];
		
		for( int i = 0; i < 5; i++ )
		{
			things[i] = new Thing( i, i, i );
		}
		
		Thing thing = new Thing( 1, 1, 1 );
		
		if (things[1].equals(thing) )
			System.out.println(" equal ! ");
		else System.out.println( " not equal ! " );
		
		if(things[3] == things[2])
			System.out.println(" yess ");
		else
			System.out.println(" noo ");
	}
}
