import java.io.IOException;



public class Main {
	
	
	@SuppressWarnings("null")
	public static void main( String[] args ) throws IOException
	{
		
		Collects c = new Collects();
		c.mapEx();
		
		System.out.println();
		
		Lines l = new Lines();
		l.lowerToCapital(l.LineInput());
		
	}
}
